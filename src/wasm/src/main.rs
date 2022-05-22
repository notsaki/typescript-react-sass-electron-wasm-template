extern crate wasm_bindgen;

use wasm_bindgen::prelude::wasm_bindgen;

#[wasm_bindgen]
pub fn greet_from_rust() -> String {
    "Hello from Rust!".to_string()
}

#[wasm_bindgen]
pub fn test(value: String) -> String {
    value
}
