use std::{
    path::Path,
    process::{Child, Command},
    sync::Mutex,
};
use tauri::{AppHandle, Manager};

pub struct AppRunner {
    pub child: Mutex<Option<Child>>,
}

impl AppRunner {
    pub fn new() -> Self {
        Self {
            child: Mutex::new(None),
        }
    }

    /// Start garage binary
    pub fn start(&self, app: &AppHandle) -> anyhow::Result<()> {
        let base = if cfg!(dev) {
            "resources/garage"
        } else {
            "garage"
        };

        let garage_bin = app.path().resolve(
            format!("{}/garage", base),
            tauri::path::BaseDirectory::Resource,
        )?;

        let work_dir = garage_bin
            .parent()
            .ok_or_else(|| anyhow::anyhow!("Cannot get parent dir of garage binary"))?;

        let child = Command::new(&garage_bin)
            .current_dir(work_dir)
            .arg("-c")
            .arg("garage.toml") // 👈 full path an toàn hơn
            .arg("server")
            .spawn()?;

        *self.child.lock().unwrap() = Some(child);
        Ok(())
    }

    /// Stop garage binary
    pub fn stop(&self) {
        if let Some(mut child) = self.child.lock().unwrap().take() {
            let _ = child.kill();
        }
    }
}
