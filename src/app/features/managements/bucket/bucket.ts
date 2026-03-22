import { Component, signal } from '@angular/core';
import { BucketModel } from './models/buckket.model';
import { Button } from '../../../shared/components/button/button';
import { CreateBucket } from "./components/create-bucket/create-bucket";
import { BucketDetails } from "./components/bucket-details/bucket-details";
import { QuestionCancelDialog } from "../../../shared/components/question-cancel-dialog/question-cancel-dialog";

@Component({
    selector: 'app-bucket',
    imports: [Button, CreateBucket, BucketDetails, QuestionCancelDialog],
    templateUrl: './bucket.html',
    styleUrl: './bucket.css',
})
export class Bucket {
    keys = signal<BucketModel[]>([
        {
            id: '14c9a4c1e9db10e72b5e8c4fc871def3f1595a264a6e1d6b06e16d871a308bd6',
            created: '2026-03-22T04:36:16.192Z',
            globalAliases: ['images'],
            localAliases: [],
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
    showViewDetail(item: BucketModel | null = null) {
        this.detailsId = item?.id ?? null;
    }

    // delete
    confirmDelete(item: BucketModel | null = null) {
        this.deleteId = item?.id ?? null;
    }

    delete() {
        console.log('Delete ID:', this.deleteId);
        this.deleteId = null;
    }
}
