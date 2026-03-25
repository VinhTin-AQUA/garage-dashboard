# npm run tauri build -- --target x86_64-unknown-linux-gnu --no-bundle
npm run tauri build --no-bundle

TARGET_DIR="app_portable"
TARGET_DIR_TAR="garage_dashboard_portable"

rm -rf "$TARGET_DIR" "$TARGET_DIR_TAR"

mkdir "$TARGET_DIR"

cp -r src-tauri/target/release/app "$TARGET_DIR/"
cp -r src-tauri/target/release/resources "$TARGET_DIR/"
cp -r src-tauri/target/release/.cargo-lock "$TARGET_DIR/"
cp -r src-tauri/target/release/app.d "$TARGET_DIR/"

echo "Done! Folder: $TARGET_DIR_TAR"
