use serde::Deserialize;

#[derive(Debug, Deserialize)]
pub struct ClusterHealth {
    pub status: String,
    pub knownNodes: u32,
    pub connectedNodes: u32,
    pub storageNodes: u32,
    pub storageNodesUp: u32,
    pub partitions: u32,
    pub partitionsQuorum: u32,
    pub partitionsAllOk: u32,
}
