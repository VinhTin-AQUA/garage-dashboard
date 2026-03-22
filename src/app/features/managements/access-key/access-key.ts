import { Component, signal } from '@angular/core';
import { form, FormField, required } from '@angular/forms/signals';
import { TextInput } from '../../../shared/components/text-input/text-input';
import { DateInput } from '../../../shared/components/date-input/date-input';
import { Checkbox } from '../../../shared/components/checkbox/checkbox';
import { Button } from '../../../shared/components/button/button';
import { CreateAccessKey } from './components/create-access-key/create-access-key';
import { AccessKeyModel } from './models/access-key.model';
import { AccessKeyDetails } from "./components/access-key-details/access-key-details";
import { QuestionCancelDialog } from "../../../shared/components/question-cancel-dialog/question-cancel-dialog";

@Component({
    selector: 'app-access-key',
    imports: [FormField, TextInput, DateInput, Checkbox, Button, CreateAccessKey, AccessKeyDetails, QuestionCancelDialog],
    templateUrl: './access-key.html',
    styleUrl: './access-key.css',
})
export class AccessKey {
    keys = signal<AccessKeyModel[]>([
        {
            id: 'GK0bc9780d11d1c96cfe80b324',
            name: 'Unnamed key',
            created: '2026-03-21T16:33:35.926Z',
            expiration: null,
            expired: false,
        },
        {
            id: 'GK0bc9780d11d1c96cfe80b324',
            name: 'Unnamed key',
            created: '2026-03-21T16:33:35.926Z',
            expiration: null,
            expired: false,
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
    showViewDetail(item: AccessKeyModel | null = null) {
        this.detailsId = item?.id ?? null;
    }

    // delete
    confirmDelete(item: AccessKeyModel | null = null) {
        this.deleteId = item?.id ?? null;
    }

    delete() {
        console.log('Delete ID:', this.deleteId);
        this.deleteId = null;
    }
}
