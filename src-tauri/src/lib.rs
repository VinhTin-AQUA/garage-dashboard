use std::net::TcpStream;
use std::time::Duration;
use std::{sync::Arc};

mod api;
mod bootstrap;
mod models;
mod services;

use crate::{services::AppRunner};

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    let runner = Arc::new(AppRunner::new());

    tauri::Builder::default()
        .plugin(tauri_plugin_fs::init())
        .setup({
            let runner = runner.clone();
            move |app| {
                // setup log plugin nếu debug
                if cfg!(debug_assertions) {
                    app.handle().plugin(
                        tauri_plugin_log::Builder::default()
                            .level(log::LevelFilter::Info)
                            .build(),
                    )?;
                }

                // start garage binary
                runner.start(&app.handle())?;

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
        .on_window_event({
            let runner = runner.clone();
            move |_, event| {
                if let tauri::WindowEvent::CloseRequested { .. } = event {
                    runner.stop();
                }
            }
        })
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
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
