import { Component, EventEmitter, Input, Output, signal } from '@angular/core';
import { form, required } from '@angular/forms/signals';
import { TextInput } from '../../../../../shared/components/text-input/text-input';
import { Checkbox } from '../../../../../shared/components/checkbox/checkbox';
import { Button } from '../../../../../shared/components/button/button';
import { DateInput } from '../../../../../shared/components/date-input/date-input';
import { AccessKeyService } from '../../../../../core/services/access-key.service';
import { AccessKeyDetailsModel } from '../../../../../core/models/access-key.model';
import { Icons } from '../../../../../shared/components/icons/icons';

@Component({
    selector: 'app-access-key-details',
    imports: [TextInput, Checkbox, Button, DateInput, Icons],
    templateUrl: './access-key-details.html',
    styleUrl: './access-key-details.css',
})
export class AccessKeyDetails {
    @Input() id: string | null = null;

    keyDetails = signal<AccessKeyDetailsModel>({
        accessKeyId: 'null',
        created: '2026-03-22T15:34:01.395Z',
        name: 'null',
        expiration: null,
        expired: false,
        secretAccessKey: '',
        permissions: {
            createBucket: true,
        },
        buckets: [],
    });

    @Output() closeModal = new EventEmitter<void>();

    constructor(private accessKeyService: AccessKeyService) {}

    ngOnInit() {
        if (this.id) {
            this.accessKeyService.getKeyInfo(this.id).subscribe({
                next: (res) => {
                    this.keyDetails.set(res);
                },
                error: (err) => {},
            });
        }
    }

    close() {
        this.closeModal.emit();
    }

    copyAccessKeyId() {
        navigator.clipboard
            .writeText(this.keyDetails().accessKeyId)
            .then(() => {})
            .catch((err) => {});
    }

    copySecretAccessKey() {
        navigator.clipboard
            .writeText(this.keyDetails().secretAccessKey)
            .then(() => {})
            .catch((err) => {});
    }
}
