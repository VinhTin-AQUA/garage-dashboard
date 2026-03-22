import { Component, EventEmitter, Output, signal } from '@angular/core';
import { TextInput } from '../../../../../shared/components/text-input/text-input';
import { Checkbox } from '../../../../../shared/components/checkbox/checkbox';
import { DateInput } from '../../../../../shared/components/date-input/date-input';
import { form, FormField, required } from '@angular/forms/signals';
import { Button } from '../../../../../shared/components/button/button';
import { CreateAccessKeyModel } from '../../models/access-key.model';
import { AccessKeyService } from '../../../../../core/services/access-key.service';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-create-access-key',
    imports: [TextInput, Checkbox, DateInput, FormField, Button, FormsModule],
    templateUrl: './create-access-key.html',
    styleUrl: './create-access-key.css',
})
export class CreateAccessKey {
    addKeyData = signal<CreateAccessKeyModel>({
        expiration: null,
        name: '',
        neverExpires: false,
        allow: {
            createBucket: true,
        },
    });

    expiration = new Date(new Date().setDate(new Date().getDate() + 10)).toISOString();

    addKeyDataForm = form(this.addKeyData, (op) => {
        required(op.name);
    });

    @Output() closeModal = new EventEmitter<boolean>();

    constructor(private accessKeyService: AccessKeyService) {}

    create() {
        

        if (!this.addKeyData().neverExpires) {
            this.addKeyData.update((x) => {
                x.expiration = this.expiration.toString();
                return x;
            });
        } else {
            this.addKeyData.update((x) => {
                x.expiration = null;
                return x;
            });
        }

        console.log(this.addKeyData());


        this.accessKeyService.createKey(this.addKeyData()).subscribe({
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
