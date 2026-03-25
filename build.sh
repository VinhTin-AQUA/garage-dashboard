# npm run tauri build -- --target x86_64-unknown-linux-gnu --no-bundle
npm run tauri build --no-bundle

TARGET_DIR="garage_dashboard_portable"
mkdir "$TARGET_DIR"

cp -r src-tauri/target/release/app "$TARGET_DIR/"
cp -r src-tauri/target/release/resources "$TARGET_DIR/"
cp -r src-tauri/target/release/.cargo-lock "$TARGET_DIR/"
cp -r src-tauri/target/release/app.d "$TARGET_DIR/"
cp -r src-tauri/icons/Square150x150Logo.png "$TARGET_DIR/"
cp -r run.sh "$TARGET_DIR/"

echo "Done! Folder: $TARGET_DIR"
