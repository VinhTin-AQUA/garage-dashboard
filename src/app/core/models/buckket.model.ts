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
    created: string;
    globalAliases: string[];
    websiteAccess: boolean;
    websiteConfig: any | null;
    keys: Key[];
    objects: number;
    bytes: number;
    unfinishedUploads: number;
    unfinishedMultipartUploads: number;
    unfinishedMultipartUploadParts: number;
    unfinishedMultipartUploadBytes: number;
    quotas: Quotas;
}

export interface CreateBucketBody {
    globalAlias: string;
    localAlias: string | null;
}

export interface Key {
    accessKeyId: string;
    name: string;
    permissions: {
        read: boolean;
        write: boolean;
        owner: boolean;
    };
    bucketLocalAliases: [];
}

export interface AllowBucketPermissionModel {
    bucketId: string;
    accessKeyId: string;
    permissions: {
        read: boolean;
        write: boolean;
        owner: boolean;
    };
}
