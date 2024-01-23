pub mod sensor;

#[get("/")]
pub fn index() -> &'static str {
    "Hello, world!"
}