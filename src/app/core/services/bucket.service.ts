import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import {
    BucketDetailsModel,
    BucketModel,
    CreateBucketBody,
} from '../../features/managements/bucket/models/buckket.model';

@Injectable({
    providedIn: 'root',
})
export class BucketService {
    private baseAdminApi = `${environment.baseAdminApi}/v2`;
    private token = environment.adminApiToken;

    constructor(private http: HttpClient) {}

    private getHeaders(): HttpHeaders {
        return new HttpHeaders({
            Authorization: `Bearer ${this.token}`,
            'Content-Type': 'application/json',
        });
    }

    /**
     * GET List Buckets
     * Nếu server hỗ trợ search=true để trả về tất cả bucket
     */
    listBuckets(): Observable<BucketModel[]> {
        return this.http.get<BucketModel[]>(`${this.baseAdminApi}/ListBuckets`, {
            headers: this.getHeaders(),
        });
    }

    /**
     * GET Bucket Info
     */
    getBucketInfo(
        bucketId: string,
        globalAlias?: boolean,
        search?: boolean,
    ): Observable<BucketDetailsModel> {
        let params = new HttpParams().set('id', bucketId);
        if (globalAlias) params = params.set('globalAlias', '');
        if (search) params = params.set('search', '');

        return this.http.get<BucketDetailsModel>(`${this.baseAdminApi}/GetBucketInfo`, {
            headers: this.getHeaders(),
            params,
        });
    }

    /**
     * POST Create Bucket
     */
    createBucket(body: CreateBucketBody): Observable<BucketDetailsModel> {
        return this.http.post<BucketDetailsModel>(`${this.baseAdminApi}/CreateBucket`, body, {
            headers: this.getHeaders(),
        });
    }

    /**
     * POST Delete Bucket
     */
    deleteBucket(bucketId: string): Observable<void> {
        const params = new HttpParams().set('id', bucketId);
        return this.http.post<void>(`${this.baseAdminApi}/DeleteBucket`, null, {
            headers: this.getHeaders(),
            params,
        });
    }
}
