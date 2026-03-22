import { Component, EventEmitter, Input, Output, signal } from '@angular/core';
import { BucketDetailsModel } from '../../models/buckket.model';
import { TextInput } from "../../../../../shared/components/text-input/text-input";
import { DateInput } from "../../../../../shared/components/date-input/date-input";
import { Checkbox } from "../../../../../shared/components/checkbox/checkbox";
import { Button } from "../../../../../shared/components/button/button";

@Component({
    selector: 'app-bucket-details',
    imports: [TextInput, DateInput, Checkbox, Button],
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

    constructor() {}

    close() {
        this.closeModal.emit();
    }
}
