export interface AdminAPITokenModel {
    id: string | null;
    created: string | null; // hoặc Date | null nếu bạn parse sang Date
    name: string;
    expiration: string | null; // hoặc Date | null
    expired: boolean;
    scope: string[];
}
