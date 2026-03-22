use std::process::{Child, Command};
use std::sync::Mutex;

use tauri::Manager;

struct AppState {
    child: Mutex<Option<Child>>,
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_fs::init())
        .setup(|app| {
            if cfg!(debug_assertions) {
                app.handle().plugin(
                    tauri_plugin_log::Builder::default()
                        .level(log::LevelFilter::Info)
                        .build(),
                )?;
            }

            app.manage(AppState {
                child: Mutex::new(None),
            });

            let base = if cfg!(dev) {
                "resources/garage"
            } else {
                "garage"
            };

            let garage_bin = app
                .path()
                .resolve(
                    format!("{}/garage", base),
                    tauri::path::BaseDirectory::Resource,
                )
                .unwrap();
            let work_dir = garage_bin.parent().unwrap();
            let child = Command::new(&garage_bin)
                .current_dir(work_dir)
                .arg("-c")
                .arg("garage.toml") // 👈 dùng full path luôn (an toàn hơn)
                .arg("server")
                .spawn()
                .expect("failed to start app");

            let state = app.state::<AppState>();
            *state.child.lock().unwrap() = Some(child);

            Ok(())
        })
        .on_window_event(|window, event| {
            if let tauri::WindowEvent::CloseRequested { .. } = event {
                let state = window.app_handle().state::<AppState>();

                let mut guard = state.child.lock().unwrap();

                if let Some(mut child) = guard.take() {
                    let _ = child.kill();
                }
            }
        })
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
