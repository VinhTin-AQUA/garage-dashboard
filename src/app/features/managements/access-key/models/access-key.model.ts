export interface AccessKeyModel {
    id: string;
    name: string;
    created: string;
    expiration: string | null;
    expired: boolean;
}
