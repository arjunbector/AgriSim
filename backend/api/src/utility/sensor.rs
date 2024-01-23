use crate::models::sensor::SensorData;
use rand::prelude::*;

pub fn fetch_sensor_data() -> SensorData {
    // random dummy data for simulation
    SensorData {
        n: rand::thread_rng().gen_range(240..=260),
        p: rand::thread_rng().gen_range(11..=22),
        k: rand::thread_rng().gen_range(110..=150),
        ssc: rand::thread_rng().gen_range(0.0..=1.0),
        ph: rand::thread_rng().gen_range(6..=9),
        moisture: rand::thread_rng().gen_range(500..=600)
    }
}