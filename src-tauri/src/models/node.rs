use serde::Deserialize;

#[derive(Debug, Deserialize)]
pub struct ClusterStatus {
    pub nodes: Vec<Node>,
}

#[derive(Debug, Deserialize)]
pub struct Node {
    pub id: String,
}
