import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { Observable, map } from 'rxjs';
import { NodeStatistics, NodeInfo } from '../../features/managements/node/models/node.model';
import { ApiResponse } from '../common/api.response';

@Injectable({
    providedIn: 'root',
})
export class NodeService {
    private baseAdminApi = `${environment.baseAdminApi}/v2`;
    private token = environment.adminApiToken;

    constructor(private http: HttpClient) {}

    private getHeaders(): HttpHeaders {
        return new HttpHeaders({
            Authorization: `Bearer ${this.token}`,
            'Content-Type': 'application/json',
        });
    }

    getNodeInfo(nodeId: string): Observable<NodeInfo> {
        const params = new HttpParams().set('node', nodeId);

        return this.http
            .get<ApiResponse<NodeInfo>>(`${this.baseAdminApi}/GetNodeInfo`, {
                headers: this.getHeaders(),
                params,
            })
            .pipe(map((res) => res.success[nodeId]));
    }

    getNodeStatistics(nodeId: string): Observable<NodeStatistics> {
        const params = new HttpParams().set('node', nodeId);

        return this.http
            .get<ApiResponse<NodeStatistics>>(`${this.baseAdminApi}/GetNodeStatistics`, {
                headers: this.getHeaders(),
                params,
            })
            .pipe(map((res) => res.success[nodeId]));
    }
}
