import { Component, EventEmitter, Output, signal } from '@angular/core';
import { TextInput } from '../../../../../shared/components/text-input/text-input';
import { Button } from '../../../../../shared/components/button/button';
import { form, required } from '@angular/forms/signals';

@Component({
    selector: 'app-create-bucket',
    imports: [TextInput, Button],
    templateUrl: './create-bucket.html',
    styleUrl: './create-bucket.css',
})
export class CreateBucket {
    addKeyData = signal<{
        globalAlias: string;
        localAlias: null;
    }>({
        globalAlias: '',
        localAlias: null,
    });

    addKeyDataForm = form(this.addKeyData, (op) => {
        required(op.globalAlias);
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
