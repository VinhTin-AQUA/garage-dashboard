use crate::{api::ApiClient, services::ClusterService};


pub async fn init() {
    let api = ApiClient::new(
        "http://127.0.0.1:3903",
        "CHANGE_ME_ADMIN_TOKEN"
    );

    let service = ClusterService::new(api);

    if let Err(err) = service.run().await {
        eprintln!("Error: {:?}", err);
    }
}
