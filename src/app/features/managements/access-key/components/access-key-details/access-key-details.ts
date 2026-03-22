import { Component, EventEmitter, Input, Output, signal } from '@angular/core';
import { form, required } from '@angular/forms/signals';
import { TextInput } from '../../../../../shared/components/text-input/text-input';
import { Checkbox } from '../../../../../shared/components/checkbox/checkbox';
import { Button } from '../../../../../shared/components/button/button';
import { DateInput } from '../../../../../shared/components/date-input/date-input';

@Component({
    selector: 'app-access-key-details',
    imports: [TextInput, Checkbox, Button, DateInput],
    templateUrl: './access-key-details.html',
    styleUrl: './access-key-details.css',
})
export class AccessKeyDetails {
    @Input() id: string | null = null;

    addKeyData = signal<{
        expiration: string;
        name: string;
        neverExpires: boolean;
        allow: {
            createBucket: boolean;
        };
    }>({
        expiration: Date.UTC.toString(),
        name: '',
        neverExpires: false,
        allow: {
            createBucket: true,
        },
    });

    @Output() closeModal = new EventEmitter<void>();

    constructor() {}

    close() {
        this.closeModal.emit();
    }
}
