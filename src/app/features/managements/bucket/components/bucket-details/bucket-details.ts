import { Component, EventEmitter, Input, Output, signal } from '@angular/core';
import { JsonPipe } from '@angular/common';

import { BucketDetailsModel } from '../../models/buckket.model';
import { TextInput } from '../../../../../shared/components/text-input/text-input';
import { DateInput } from '../../../../../shared/components/date-input/date-input';
import { Checkbox } from '../../../../../shared/components/checkbox/checkbox';
import { Button } from '../../../../../shared/components/button/button';
import { BucketService } from '../../../../../core/services/bucket.service';
import { BytesPipe } from '../../../../../shared/pipes/bytes-pipe';

@Component({
    selector: 'app-bucket-details',
    imports: [TextInput, DateInput, Checkbox, Button, JsonPipe, BytesPipe],
    templateUrl: './bucket-details.html',
    styleUrl: './bucket-details.css',
})
export class BucketDetails {
    @Input() id: string | null = null;

    bucketData = signal<BucketDetailsModel>({
        id: '',
        created: '',
        globalAliases: [],
        websiteAccess: false,
        websiteConfig: null,
        keys: [],
        objects: 0,
        bytes: 0,
        unfinishedUploads: 0,
        unfinishedMultipartUploads: 0,
        unfinishedMultipartUploadParts: 0,
        unfinishedMultipartUploadBytes: 0,
        quotas: {
            maxSize: null,
            maxObjects: null,
        },
    });

    @Output() closeModal = new EventEmitter<void>();

    constructor(private bucketService: BucketService) {}

    ngOnInit() {
        if (!this.id) {
            return;
        }
        this.bucketService.getBucketInfo(this.id).subscribe({
            next: (res) => {
                this.bucketData.set(res);
            },
            error: (err) => {},
        });
    }

    close() {
        this.closeModal.emit();
    }
}
