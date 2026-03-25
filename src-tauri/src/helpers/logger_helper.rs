use std::fs::OpenOptions;
use std::io::Write;
use std::sync::{
    mpsc::{self, Sender},
    OnceLock,
};
use std::thread;

static LOGGER: OnceLock<Sender<String>> = OnceLock::new();

pub fn init_logger() {
    if LOGGER.get().is_some() {
        return;
    }

    let (tx, rx) = mpsc::channel::<String>();

    if LOGGER.set(tx).is_err() {
        return;
    }

    thread::spawn(move || {
        let log_path = std::env::current_dir()
            .unwrap_or_else(|_| std::path::PathBuf::from("."))
            .join("app.log");

        println!("Log file at: {:?}", log_path);

        let mut file = OpenOptions::new()
            .create(true)
            .append(true)
            .open(log_path)
            .expect("Cannot open log file");

        for line in rx {
            let _ = writeln!(file, "{}", line);
        }
    });
}

pub fn append_log_line(line: String) {
    if let Some(tx) = LOGGER.get() {
        let _ = tx.send(line);
    }
}

#[macro_export]
macro_rules! log_to_file {
    ($($arg:tt)*) => {{
        let formatted = format!($($arg)*);
        $crate::helpers::append_log_line(formatted);
    }};
}
