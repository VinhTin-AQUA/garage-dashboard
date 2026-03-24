use crate::{
    api::ApiClient,
    models::{
        ApplyRequest, ClusterHealth, ClusterStatus, Parameters, PreviewResponse, RoleRequest,
        UpdateLayoutRequest,
    },
};

pub struct ClusterService {
    api: ApiClient,
}

impl ClusterService {
    pub fn new(api: ApiClient) -> Self {
        Self { api }
    }

    pub async fn run(&self) -> anyhow::Result<()> {
        // 1. check health
        println!("Get Cluster Health");
        let health: ClusterHealth = self.api.get("/v2/GetClusterHealth").await?;

        if health.status != "unavailable" {
            println!("Cluster already inited → STOP");
            return Ok(());
        }

        // 2. get nodes
        println!("Get Cluster Status");
        let status: ClusterStatus = self.api.get("/v2/GetClusterStatus").await?;

        let node_id = status
            .nodes
            .get(0)
            .ok_or_else(|| anyhow::anyhow!("No node found"))?
            .id
            .clone();

        // 3. update layout
        println!("Update Layout");
        let body = UpdateLayoutRequest {
            parameters: Parameters {
                zoneRedundancy: "maximum".into(),
            },
            roles: vec![RoleRequest {
                id: node_id.clone(),
                capacity: 1048576,
                zone: "dc1".into(),
                tags: vec![],
            }],
        };

        self.api
            .post::<serde_json::Value, _>("/v2/UpdateClusterLayout", Some(body))
            .await?;

        // 4. preview → get version
        let preview: PreviewResponse = self
            .api
            .post("/v2/PreviewClusterLayoutChanges", Option::<()>::None)
            .await?;

        let version = preview.newLayout.version;
        println!("version = {:?}", version);

        // 5. apply
        let apply_body = ApplyRequest { version };

        self.api
            .post::<serde_json::Value, _>("/v2/ApplyClusterLayout", Some(apply_body))
            .await?;

        println!("Cluster layout applied successfully!");

        Ok(())
    }
}
