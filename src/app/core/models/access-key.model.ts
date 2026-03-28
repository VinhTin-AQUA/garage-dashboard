export interface AccessKeyModel {
    id: string;
    name: string;
    created: string;
    expiration: string | null;
    expired: boolean;
}

export interface CreateAccessKeyModel {
    expiration: string | null;
    name: string;
    neverExpires: boolean;
    allow: {
        createBucket: boolean;
    };
}

export interface AccessKeyDetailsModel {
    accessKeyId: string;
    created: string; // ISO date string
    name: string;
    expiration: string | null; // có thể null
    expired: boolean;
    secretAccessKey: string;
    permissions: Permissions;
    buckets: any[]; // nếu biết kiểu cụ thể của bucket, có thể thay any bằng kiểu đó
}

interface Permissions {
    createBucket: boolean;
}
