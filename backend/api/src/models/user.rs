use mongodb::bson::oid::ObjectId;
use serde::{Serialize, Deserialize};

#[derive(Serialize, Deserialize, Debug)]
pub struct User{
    #[serde(rename="_id")]
    pub id: ObjectId,
    pub name: String,
    pub phone: String,
}

#[derive(Serialize, Deserialize)]
pub struct CreateUser {
    pub name: String,
    pub phone: String
}

impl User {
    pub fn new(user: CreateUser) -> User {
        User {
            id: ObjectId::new(),
            name: user.name.clone(),
            phone: user.phone.clone()
        }
    }
}