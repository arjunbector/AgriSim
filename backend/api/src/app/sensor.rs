use chrono::Timelike;
use rocket::{response::stream::{Event, EventStream}, tokio::time::{self, Duration}};
use crate::utility::sensor;

#[get("/")]
pub fn sensor_data() -> EventStream![] {
    EventStream! {
        let mut interval = time::interval(Duration::from_secs(5));
        loop {
            let sensor_data = sensor::fetch_sensor_data();

            let time_now = chrono::Utc::now().time();
            let data = format!("Sensor 1 :: {}:{}:{} :: N-{} P-{} K-{} ssc-{:.2} ph-{} moisture-{}", time_now.hour(), time_now.minute(), time_now.second(), sensor_data.n, sensor_data.p, sensor_data.k, sensor_data.ssc, sensor_data.ph, sensor_data.moisture);
            yield Event::data(data);
            interval.tick().await;
        }
    }
}