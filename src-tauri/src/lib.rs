use std::net::TcpStream;
use std::sync::Arc;
use std::time::Duration;

mod api;
mod bootstrap;
mod models;
mod services;
mod helpers;

use crate::services::AppRunner;

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    std::panic::set_hook(Box::new(|info| {
        let _ = std::fs::write("panic.log", format!("{:?}", info));
    }));

    let runner = Arc::new(AppRunner::new());

    let result = tauri::Builder::default()
        // 2. Luôn bật log (cả debug + release)
        .plugin(
            tauri_plugin_log::Builder::default()
                .level(log::LevelFilter::Info)
                .targets([tauri_plugin_log::Target::new(
                    tauri_plugin_log::TargetKind::LogDir {
                        file_name: Some("app".into()),
                    },
                )])
                .build(),
        )
        .setup({
            let runner = runner.clone();
            move |app| {
                // 3. Log lỗi khi start
                if let Err(e) = runner.start(&app.handle()) {
                    log::error!("Runner start failed: {}", e);
                }

                if !wait_port_ready("127.0.0.1:3903", 5000) {
                    eprintln!("Admin API port 3903 never became ready");
                    return Ok(());
                }

                // sau đó gọi bootstrap init
                tauri::async_runtime::spawn(async {
                    bootstrap::init().await;
                });
                Ok(())
            }
        })
        .run(tauri::generate_context!());

    // 4. Log lỗi nếu app crash
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
