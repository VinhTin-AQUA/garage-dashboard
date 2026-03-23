import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { Observable } from 'rxjs';
import { ClusterStatus, ClusterStatistics, ClusterHealth } from '../../features/managements/cluster/models/cluster.model';

@Injectable({
    providedIn: 'root',
})
export class ClusterService {
    private baseAdminApi = `${environment.baseAdminApi}/v2`;
    private token = environment.adminApiToken;

    constructor(private http: HttpClient) {}

    private getHeaders(): HttpHeaders {
        return new HttpHeaders({
            Authorization: `Bearer ${this.token}`,
            'Content-Type': 'application/json',
        });
    }

    // -------- API 1 --------
    getClusterStatus(): Observable<ClusterStatus> {
        return this.http.get<ClusterStatus>(`${this.baseAdminApi}/GetClusterStatus`, {
            headers: this.getHeaders(),
        });
    }

    // -------- API 2 --------
    getClusterStatistics(): Observable<ClusterStatistics> {
        return this.http.get<ClusterStatistics>(`${this.baseAdminApi}/GetClusterStatistics`, {
            headers: this.getHeaders(),
        });
    }

    // -------- API 3 --------
    getClusterHealth(): Observable<ClusterHealth> {
        return this.http.get<ClusterHealth>(`${this.baseAdminApi}/GetClusterHealth`, {
            headers: this.getHeaders(),
        });
    }
}
