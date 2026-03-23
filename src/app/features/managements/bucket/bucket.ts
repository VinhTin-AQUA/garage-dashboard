import { Component, signal } from '@angular/core';
import { BucketModel } from './models/buckket.model';
import { Button } from '../../../shared/components/button/button';
import { CreateBucket } from './components/create-bucket/create-bucket';
import { BucketDetails } from './components/bucket-details/bucket-details';
import { QuestionCancelDialog } from '../../../shared/components/question-cancel-dialog/question-cancel-dialog';
import { BucketService } from '../../../core/services/bucket.service';

@Component({
    selector: 'app-bucket',
    imports: [Button, CreateBucket, BucketDetails, QuestionCancelDialog],
    templateUrl: './bucket.html',
    styleUrl: './bucket.css',
})
export class Bucket {
    buckets = signal<BucketModel[]>([]);

    showCreate = signal<boolean>(false);
    deleteId: string | null = null;
    detailsId: string | null = null;

    constructor(private bucketService: BucketService) {}

    ngOnInit() {
        this.loadBuckets();
    }

    private loadBuckets() {
        this.bucketService.listBuckets().subscribe({
            next: (res) => {
                this.buckets.set(res);
            },
            error: (err) => {
                console.log(err);
            },
        });
    }

    // create
    openCreateModal(value: boolean) {
        this.showCreate.set(value);
        this.loadBuckets();
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
        if (!this.deleteId) {
            return;
        }

        this.bucketService.deleteBucket(this.deleteId).subscribe({
            next: (res) => {
                this.loadBuckets();
                this.deleteId = null;
            },
            error: (err) => {},
        });
    }
}
