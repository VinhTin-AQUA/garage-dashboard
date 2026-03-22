// Health summary
export interface ClusterHealthModel {
    status: string;
    knownNodes: number;
    connectedNodes: number;
    storageNodes: number;
    storageNodesUp: number;
    partitions: number;
    partitionsQuorum: number;
    partitionsAllOk: number;
}

// Freeform text
export interface ClusterStorageTextModel {
    freeform: string;
}

// Node role
export interface NodeRole {
    zone: string;
    tags: string[];
    capacity: number;
}

// Partition info
export interface PartitionInfo {
    available: number;
    total: number;
}

// Node
export interface ClusterNode {
    id: string;
    garageVersion: string;
    addr: string;
    hostname: string;
    isUp: boolean;
    lastSeenSecsAgo: number | null;
    role: NodeRole;
    draining: boolean;
    dataPartition: PartitionInfo;
    metadataPartition: PartitionInfo;
}

// Layout
export interface ClusterLayoutModel {
    layoutVersion: number;
    nodes: ClusterNode[];
}
