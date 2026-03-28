import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import {
    AccessKeyDetailsModel,
    AccessKeyModel,
    CreateAccessKeyModel,
} from '../models/access-key.model';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class AccessKeyService {
    private baseAdminApi = `${environment.baseAdminApi}/v2`;
    private token = environment.adminApiToken;

    constructor(private http: HttpClient) {}

    private getHeaders(): HttpHeaders {
        return new HttpHeaders({
            Authorization: `Bearer ${this.token}`,
            'Content-Type': 'application/json',
        });
    }

    listKeys(): Observable<AccessKeyModel[]> {
        const url = `${this.baseAdminApi}/ListKeys`;
        return this.http.get<AccessKeyModel[]>(url, { headers: this.getHeaders() });
    }

    getKeyInfo(id: string, showSecretKey: boolean = true): Observable<AccessKeyDetailsModel> {
        const url = `${this.baseAdminApi}/GetKeyInfo`;
        let params = new HttpParams().set('id', id).set('showSecretKey', String(showSecretKey));
        return this.http.get<AccessKeyDetailsModel>(url, { headers: this.getHeaders(), params });
    }

    deleteKey(id: string): Observable<any> {
        const url = `${this.baseAdminApi}/DeleteKey`;
        const params = new HttpParams().set('id', id);
        return this.http.post(url, null, { headers: this.getHeaders(), params });
    }

    createKey(model: CreateAccessKeyModel): Observable<AccessKeyDetailsModel> {
        const url = `${this.baseAdminApi}/CreateKey`;
        return this.http.post<AccessKeyDetailsModel>(url, model, {
            headers: this.getHeaders(),
        });
    }
}
