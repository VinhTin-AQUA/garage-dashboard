use std::net::TcpStream;
use std::path::PathBuf;
use std::sync::Arc;
use std::time::Duration;

mod api;
mod bootstrap;
mod helpers;
mod models;
mod services;

use crate::helpers::init_logger;
use crate::services::AppRunner;

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    std::panic::set_hook(Box::new(|info| {
        let _ = std::fs::write("panic.log", format!("{:?}", info));
    }));

    let mut builder = tauri::Builder::default();

    let exe_dir = std::env::current_exe()
        .ok()
        .and_then(|p| p.parent().map(|p| p.to_path_buf()))
        .unwrap_or_else(|| PathBuf::from("."));

    if cfg!(debug_assertions) {
        builder = builder.plugin(
            tauri_plugin_log::Builder::default()
                .level(log::LevelFilter::Info)
                .targets([tauri_plugin_log::Target::new(
                    tauri_plugin_log::TargetKind::Folder {
                        path: exe_dir,
                        file_name: Some("app".into()),
                    },
                )])
                .build(),
        );
    } else {
        init_logger();
    }

    let runner = Arc::new(AppRunner::new());

    let result = builder
        .setup({
            let runner = runner.clone();
            move |app| {
                if let Err(e) = runner.start(&app.handle()) {
                    log::error!("Runner start failed: {}", e);
                }

                if !wait_port_ready("127.0.0.1:3903", 5000) {
                    log::error!("Port 3903 not ready");
                    return Ok(());
                }

                tauri::async_runtime::spawn(async {
                    bootstrap::init().await;
                });

                Ok(())
            }
        })
        .run(tauri::generate_context!());

    if let Err(e) = result {
        log::error!("App crashed: {}", e);
    }
}

fn wait_port_ready(addr: &str, timeout_ms: u64) -> bool {
    let start = std::time::Instant::now();
    while start.elapsed() < Duration::from_millis(timeout_ms) {
        if TcpStream::connect(addr).is_ok() {
            return true; // port ready
        }
        std::thread::sleep(Duration::from_millis(10));
    }
    false
}
