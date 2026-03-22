import { Component, signal } from '@angular/core';
import { Button } from '../../../shared/components/button/button';
import { CreateAccessKey } from './components/create-access-key/create-access-key';
import { AccessKeyModel } from './models/access-key.model';
import { AccessKeyDetails } from './components/access-key-details/access-key-details';
import { QuestionCancelDialog } from '../../../shared/components/question-cancel-dialog/question-cancel-dialog';
import { AccessKeyService } from '../../../core/services/access-key.service';

@Component({
    selector: 'app-access-key',
    imports: [Button, CreateAccessKey, AccessKeyDetails, QuestionCancelDialog],
    templateUrl: './access-key.html',
    styleUrl: './access-key.css',
})
export class AccessKey {
    keys = signal<AccessKeyModel[]>([]);

    showCreate = signal<boolean>(false);
    deleteId: string | null = null;
    detailsId: string | null = null;

    constructor(private accessKeyService: AccessKeyService) {}

    ngOnInit() {
        this.loadKeys();
    }

    private loadKeys() {
        this.accessKeyService.listKeys().subscribe({
            next: (res) => {
                this.keys.set(res);
            },
            error: (err) => {
                console.log(err);
            },
        });
    }

    // create
    openCreateModal(value: boolean) {
        this.showCreate.set(value);

        if (!value) {
            this.loadKeys();
        }
    }

    // details
    showViewDetail(item: AccessKeyModel | null = null) {
        this.detailsId = item?.id ?? null;
    }

    // delete
    confirmDelete(item: AccessKeyModel | null = null) {
        this.deleteId = item?.id ?? null;
    }

    delete() {
        if (this.deleteId) {
            this.accessKeyService.deleteKey(this.deleteId).subscribe({
                next: (res) => {
                    this.loadKeys();
                },
                error: (err) => {},
            });
        }
        this.deleteId = null;
    }
}
