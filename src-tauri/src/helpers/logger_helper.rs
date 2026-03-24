use std::fs::OpenOptions;
use std::io::Write;
use std::thread;

pub fn append_log_line(line: String) {
    thread::spawn(move || {
        if let Ok(mut file) = OpenOptions::new()
            .create(true)
            .append(true)
            .open("app.log")
        {
            let _ = writeln!(file, "{}", line);
        }
    });
}

#[macro_export]
macro_rules! log_to_file {
    ($($arg:tt)*) => {{
        let formatted = format!($($arg)*);
        $crate::helpers::append_log_line(formatted);
    }};
}
