use app::index;

#[macro_use] extern crate rocket;

mod app;

#[rocket::main]
async fn main() -> Result<(), rocket::Error> {
    let _rocket = rocket::build()
        
        // <-------- ROUTES --------->
        .mount("/", routes![index])


        // launching
        .launch().await?;

    Ok(())
}