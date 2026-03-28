import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, switchMap } from 'rxjs';
import { AllowBucketPermissionModel, BucketDetailsModel, BucketModel, CreateBucketBody } from '../models/buckket.model';

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

    listBuckets(): Observable<BucketModel[]> {
        return this.http.get<BucketModel[]>(`${this.baseAdminApi}/ListBuckets`, {
            headers: this.getHeaders(),
        });
    }

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

    createBucket(body: CreateBucketBody): Observable<BucketDetailsModel> {
        return this.http.post<BucketDetailsModel>(`${this.baseAdminApi}/CreateBucket`, body, {
            headers: this.getHeaders(),
        });
    }

    deleteBucket(bucketId: string): Observable<void> {
        const params = new HttpParams().set('id', bucketId);
        return this.http.post<void>(`${this.baseAdminApi}/DeleteBucket`, null, {
            headers: this.getHeaders(),
            params,
        });
    }

    allowPermission(model: AllowBucketPermissionModel) {
        return this.http
            .post<BucketDetailsModel>(
                `${this.baseAdminApi}/DenyBucketKey`,
                {
                    ...model,
                    permissions: {
                        read: true,
                        write: true,
                        owner: true,
                    },
                },
                { headers: this.getHeaders() },
            )
            .pipe(
                switchMap((res1) =>
                    this.http.post<BucketDetailsModel>(
                        `${this.baseAdminApi}/AllowBucketKey`,
                        model,
                        {
                            headers: this.getHeaders(),
                        },
                    ),
                ),
            );
    }
}
