use app::index;
use app::sensor::sensor_data;

#[macro_use] extern crate rocket;

mod app;
mod database;
mod models;
mod utility;

#[rocket::main]
async fn main() -> Result<(), rocket::Error> {
    let _rocket = rocket::build()
        
        // <-------- ROUTES --------->
        .mount("/", routes![index])
        .mount("/api/v1/sensor/", routes![sensor_data])


        // launching
        .launch().await?;

    Ok(())
}