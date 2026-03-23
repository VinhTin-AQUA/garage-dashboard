import { Component, EventEmitter, Output, signal } from '@angular/core';
import { TextInput } from '../../../../../shared/components/text-input/text-input';
import { Button } from '../../../../../shared/components/button/button';
import { form, required } from '@angular/forms/signals';
import { BucketService } from '../../../../../core/services/bucket.service';
import { CreateBucketBody } from '../../models/buckket.model';

@Component({
    selector: 'app-create-bucket',
    imports: [TextInput, Button],
    templateUrl: './create-bucket.html',
    styleUrl: './create-bucket.css',
})
export class CreateBucket {
    addKeyData = signal<CreateBucketBody>({
        globalAlias: '',
        localAlias: null,
    });

    addKeyDataForm = form(this.addKeyData, (op) => {
        required(op.globalAlias);
    });

    @Output() closeModal = new EventEmitter<boolean>();

    constructor(private bucketService: BucketService) {}

    create() {
        this.bucketService.createBucket(this.addKeyData()).subscribe({
            next: (res) => {
                this.closeModal.emit(false);
            },
            error: (err) => {},
        });
    }

    close() {
        this.closeModal.emit(false);
    }
}
