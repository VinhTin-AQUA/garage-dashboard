import { Component, EventEmitter, Output, signal } from '@angular/core';
import { TextInput } from '../../../../../shared/components/text-input/text-input';
import { Checkbox } from '../../../../../shared/components/checkbox/checkbox';
import { DateInput } from '../../../../../shared/components/date-input/date-input';
import { form, FormField, required } from '@angular/forms/signals';
import { Button } from "../../../../../shared/components/button/button";

@Component({
    selector: 'app-create-access-key',
    imports: [TextInput, Checkbox, DateInput, FormField, Button],
    templateUrl: './create-access-key.html',
    styleUrl: './create-access-key.css',
})
export class CreateAccessKey {
    addKeyData = signal<{
        expiration: string | null;
        name: string;
        neverExpires: boolean;
        allow: {
            createBucket: boolean;
        };
    }>({
        expiration: null,
        name: '',
        neverExpires: false,
        allow: {
            createBucket: true,
        },
    });

    addKeyDataForm = form(this.addKeyData, (op) => {
        required(op.name);
    });

    @Output() closeModal = new EventEmitter<boolean>();

    constructor() {}

    create() {
        console.log(this.addKeyDataForm().value());
        this.closeModal.emit(false);
    }

    close() {
        this.closeModal.emit(false);
    }
}
