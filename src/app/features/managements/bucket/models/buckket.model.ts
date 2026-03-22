export interface BucketModel {
    id: string;
    created: string; // hoặc Date nếu bạn parse sang Date
    globalAliases: string[];
    localAliases: string[];
}

export interface Quotas {
    maxSize: number | null;
    maxObjects: number | null;
}

export interface BucketDetailsModel {
    id: string;
    created: string; // hoặc Date nếu cần
    globalAliases: string[];
    websiteAccess: boolean;
    websiteConfig: any | null; // có thể refine nếu biết cấu trúc
    keys: any[]; // đổi sang type cụ thể nếu có schema
    objects: number;
    bytes: number;
    unfinishedUploads: number;
    unfinishedMultipartUploads: number;
    unfinishedMultipartUploadParts: number;
    unfinishedMultipartUploadBytes: number;
    quotas: Quotas;
}
