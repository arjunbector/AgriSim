use mongodb::Client;

// base client which initiates the mongo connection
#[derive(Clone, Debug)]
pub struct MongoClient {
    pub client: Client,
}

impl MongoClient {
    // initializing the connection to a specific database
    pub async fn init(uri: &str) -> mongodb::error::Result<Self> {
        let client = Client::with_uri_str(uri).await?;
        
        Ok(Self {
            client,
        })
    }
}