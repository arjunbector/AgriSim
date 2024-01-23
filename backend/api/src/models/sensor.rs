use serde::{Serialize, Deserialize};

#[derive(Serialize, Deserialize, Debug)]
pub struct SensorData {
    pub n: i16,
    pub p: i16,
    pub k: i16,
    pub ssc: f32,
    pub ph: i16,
    pub moisture: i16,
}