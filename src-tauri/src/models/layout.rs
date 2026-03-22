use serde::{Deserialize, Serialize};

#[derive(Debug, Serialize)]
pub struct UpdateLayoutRequest {
    pub parameters: Parameters,
    pub roles: Vec<RoleRequest>,
}

#[derive(Debug, Serialize)]
pub struct Parameters {
    pub zoneRedundancy: String,
}

#[derive(Debug, Serialize)]
pub struct RoleRequest {
    pub id: String,
    pub capacity: u64,
    pub zone: String,
    pub tags: Vec<String>,
}

// preview
#[derive(Debug, Deserialize)]
pub struct PreviewResponse {
    pub newLayout: NewLayout,
}

#[derive(Debug, Deserialize)]
pub struct NewLayout {
    pub version: u32,
}

// apply
#[derive(Debug, Serialize)]
pub struct ApplyRequest {
    pub version: u32,
}
