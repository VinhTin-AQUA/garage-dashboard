import { Component, EventEmitter, Output, signal } from '@angular/core';
import { form, required } from '@angular/forms/signals';
import { TextInput } from '../../../../../shared/components/text-input/text-input';
import { Checkbox } from '../../../../../shared/components/checkbox/checkbox';
import { DateInput } from '../../../../../shared/components/date-input/date-input';
import { Button } from '../../../../../shared/components/button/button';

@Component({
    selector: 'app-create-admin-api-token',
    imports: [TextInput, Checkbox, DateInput, Button],
    templateUrl: './create-admin-api-token.html',
    styleUrl: './create-admin-api-token.css',
})
export class CreateAdminApiToken {
    addKeyData = signal<{
        expiration: string | null;
        name: string;
        neverExpires: boolean;
        scope: string[];
    }>({
        expiration: null,
        name: '',
        neverExpires: false,
        scope: ['*'],
    });

    addKeyDataForm = form(this.addKeyData, (op) => {
        required(op.name);
    });

    @Output() closeModal = new EventEmitter<boolean>();

    create() {
        console.log(this.addKeyDataForm().value());
        this.closeModal.emit(false);
    }

    close() {
        this.closeModal.emit(false);
    }
}
