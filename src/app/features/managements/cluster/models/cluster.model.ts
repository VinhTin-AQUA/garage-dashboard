export interface ClusterStatus {
    layoutVersion: number;
    nodes: NodeInfo[];
}

export interface NodeInfo {
    id: string;
    garageVersion: string;
    addr: string;
    hostname: string;
    isUp: boolean;
    lastSeenSecsAgo: number | null;
    role: Role;
    draining: boolean;
    dataPartition: Partition;
    metadataPartition: Partition;
}

export interface Role {
    zone: string;
    tags: string[];
    capacity: number;
}

export interface Partition {
    available: number;
    total: number;
}

// -------- Statistics --------
export interface ClusterStatistics {
    freeform: string;
}

// -------- Health --------
export interface ClusterHealth {
    status: string;
    knownNodes: number;
    connectedNodes: number;
    storageNodes: number;
    storageNodesUp: number;
    partitions: number;
    partitionsQuorum: number;
    partitionsAllOk: number;
}
