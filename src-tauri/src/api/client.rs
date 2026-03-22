use reqwest::Client;

pub struct ApiClient {
    client: Client,
    base_url: String,
    token: String,
}

impl ApiClient {
    pub fn new(base_url: &str, token: &str) -> Self {
        Self {
            client: Client::new(),
            base_url: base_url.to_string(),
            token: token.to_string(),
        }
    }

    pub async fn get<T: serde::de::DeserializeOwned>(&self, path: &str) -> anyhow::Result<T> {
        let res = self
            .client
            .get(format!("{}{}", self.base_url, path))
            .bearer_auth(&self.token)
            .send()
            .await?
            .json::<T>()
            .await?;

        Ok(res)
    }

    pub async fn post<T: serde::de::DeserializeOwned, B: serde::Serialize>(
        &self,
        path: &str,
        body: Option<B>,
    ) -> anyhow::Result<T> {
        let req = self
            .client
            .post(format!("{}{}", self.base_url, path))
            .bearer_auth(&self.token);

        let req = if let Some(b) = body {
            req.json(&b)
        } else {
            req
        };

        let res = req.send().await?.json::<T>().await?;

        Ok(res)
    }
}
