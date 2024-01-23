use chrono::Timelike;
use rand::prelude::*;
use rocket::{response::stream::{Event, EventStream}, tokio::time::{self, Duration}};

#[get("/")]
pub fn sensor_data() -> EventStream![] {
    EventStream! {
        let mut interval = time::interval(Duration::from_secs(5));
        loop {
            let n = rand::thread_rng().gen_range(240..=260);
            let p = rand::thread_rng().gen_range(11..=22);
            let k = rand::thread_rng().gen_range(110..=150);
            let ssc = rand::thread_rng().gen_range(0.0..=1.0);
            let ph = rand::thread_rng().gen_range(6..=9);
            let moisture = rand::thread_rng().gen_range(500..=600);

            let time_now = chrono::Utc::now().time();
            let data = format!("Sensor 1 :: {}:{}:{} :: N-{} P-{} K-{} ssc-{:.2} ph-{} moisture-{}", time_now.hour(), time_now.minute(), time_now.second(), n, p, k, ssc, ph, moisture);
            yield Event::data(data);
            interval.tick().await;
        }
    }
}