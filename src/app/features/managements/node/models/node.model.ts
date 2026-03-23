export interface NodeInfo {
    nodeId: string;
    garageVersion: string;
    garageFeatures: string[];
    rustVersion: string;
    dbEngine: string;
}

export interface NodeStatistics {
    freeform: string;
}
