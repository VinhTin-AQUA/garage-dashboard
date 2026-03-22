import { Component, signal } from '@angular/core';
import { AdminAPITokenModel } from './models/admin-api-toke.model';
import { Button } from '../../../shared/components/button/button';
import { QuestionCancelDialog } from '../../../shared/components/question-cancel-dialog/question-cancel-dialog';
import { CreateAdminApiToken } from './components/create-admin-api-token/create-admin-api-token';
import { AdminApiTokenDetails } from './components/admin-api-token-details/admin-api-token-details';

@Component({
    selector: 'app-admin-api-token',
    imports: [Button, QuestionCancelDialog, CreateAdminApiToken, AdminApiTokenDetails],
    templateUrl: './admin-api-token.html',
    styleUrl: './admin-api-token.css',
})
export class AdminAPIToken {
    keys = signal<AdminAPITokenModel[]>([
        {
            id: null,
            created: null,
            name: 'admin_token (from daemon configuration)',
            expiration: null,
            expired: false,
            scope: ['*'],
        },
        {
            id: null,
            created: null,
            name: 'admin_token (from daemon configuration)',
            expiration: null,
            expired: false,
            scope: ['*'],
        },
        {
            id: 'a431749f705c322c88c8570e',
            created: '2026-03-21T16:32:29.385Z',
            name: 'token_20260321_1632',
            expiration: '2026-04-20T16:32:29.351Z',
            expired: false,
            scope: ['*'],
        },
    ]);

    showCreate = signal<boolean>(false);
    deleteId: string | null = null;
    detailsId: string | null = null;

    // create
    openCreateModal(value: boolean) {
        this.showCreate.set(value);
    }

    // details
    showViewDetail(item: AdminAPITokenModel | null = null) {
        this.detailsId = item?.id ?? null;
    }

    // delete
    confirmDelete(item: AdminAPITokenModel | null = null) {
        this.deleteId = item?.id ?? null;
    }

    delete() {
        console.log('Delete ID:', this.deleteId);
        this.deleteId = null;
    }
}
