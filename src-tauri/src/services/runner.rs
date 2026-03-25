use std::{
    env,
    path::PathBuf,
    process::{Child, Command, Stdio},
    sync::Mutex,
};

use tauri::{AppHandle, Manager};

use crate::log_to_file;

pub struct AppRunner {
    pub child: Mutex<Option<Child>>,
}

impl AppRunner {
    pub fn new() -> Self {
        Self {
            child: Mutex::new(None),
        }
    }

    /// Resolve resource dir cho mọi mode (dev / build / portable)
    fn resolve_resource_dir(app: &AppHandle) -> anyhow::Result<PathBuf> {
        // 1. thử dùng path chuẩn của Tauri
        if let Ok(dir) = app.path().resource_dir() {
            if dir.exists() {
                log_to_file!("Using tauri resource_dir: {:?}", dir);
                return Ok(dir);
            }
        }

        // 2. fallback: lấy theo executable (portable mode)
        let exe_path = env::current_exe()?;
        let exe_dir = exe_path
            .parent()
            .ok_or_else(|| anyhow::anyhow!("Cannot get exe dir"))?;

        let fallback = exe_dir.join("resources");

        log_to_file!("Fallback resource dir: {:?}", fallback);

        Ok(fallback)
    }

    /// Start garage binary
    pub fn start(&self, app: &AppHandle) -> anyhow::Result<()> {
        let resource_dir = Self::resolve_resource_dir(app)?;

        let mut base = resource_dir.clone();

        // dev mode thì resources nằm trong thư mục con
        if cfg!(debug_assertions) {
            base = base.join("resources");
        }

        let garage_bin = base.join("garage/garage");
        let config_path = base.join("garage/garage.toml");

        log_to_file!("=== AppRunner Debug ===");
        log_to_file!("Resource dir: {:?}", resource_dir);
        log_to_file!("Garage bin: {:?}", garage_bin);
        log_to_file!("Garage exists: {}", garage_bin.exists());
        log_to_file!("Config path: {:?}", config_path);
        log_to_file!("Config exists: {}", config_path.exists());

        if !garage_bin.exists() {
            anyhow::bail!("Garage binary not found");
        }

        if !config_path.exists() {
            anyhow::bail!("garage.toml not found");
        }

        let work_dir = garage_bin
            .parent()
            .ok_or_else(|| anyhow::anyhow!("Cannot get parent dir"))?;

        let child = match Command::new(&garage_bin)
            .current_dir(work_dir)
            .arg("-c")
            .arg(&config_path)
            .arg("server")
            .stdout(Stdio::inherit())
            .stderr(Stdio::inherit())
            .spawn()
        {
            Ok(c) => {
                log_to_file!("Garage started successfully");
                c
            }
            Err(e) => {
                log_to_file!("Spawn failed: {:?}", e);
                log_to_file!("Path: {:?}", garage_bin);
                log_to_file!("Workdir: {:?}", work_dir);
                return Err(e.into());
            }
        };

        *self.child.lock().unwrap() = Some(child);

        Ok(())
    }

    /// Stop garage binary
    pub fn stop(&self) {
        if let Some(mut child) = self.child.lock().unwrap().take() {
            log::info!("Stopping garage...");
            let _ = child.kill();
        }
    }
}
