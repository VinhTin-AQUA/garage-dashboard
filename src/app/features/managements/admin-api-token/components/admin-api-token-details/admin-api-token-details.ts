import { Component, EventEmitter, Input, Output, signal } from '@angular/core';
import { TextInput } from '../../../../../shared/components/text-input/text-input';
import { Checkbox } from '../../../../../shared/components/checkbox/checkbox';
import { DateInput } from '../../../../../shared/components/date-input/date-input';
import { Button } from '../../../../../shared/components/button/button';

@Component({
    selector: 'app-admin-api-token-details',
    imports: [TextInput, Checkbox, DateInput, Button],
    templateUrl: './admin-api-token-details.html',
    styleUrl: './admin-api-token-details.css',
})
export class AdminApiTokenDetails {
    @Input() id: string | null = null;

    addKeyData = signal<{
        id: string | null;
        name: string;
        expiration: string;
        expired: boolean;
        scope: string[];
    }>({
        id: null,
        name: '',
        expiration: '',
        expired: false,
        scope: [],
    });

    @Output() closeModal = new EventEmitter<void>();

    constructor() {}

    close() {
        this.closeModal.emit();
    }
}
