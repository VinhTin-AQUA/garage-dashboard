import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-question-cancel-dialog',
    imports: [CommonModule],
    templateUrl: './question-cancel-dialog.html',
    styleUrl: './question-cancel-dialog.css',
})
export class QuestionCancelDialog {
    @Input() title: string = 'Xác nhận';
    @Input() message: string = 'Bạn có chắc chắn?';
    @Input() isSuccess: boolean = false;

    @Output() close = new EventEmitter<boolean>();
    @Output() confirm = new EventEmitter<void>();

    constructor() {}

    onCancel() {
        this.close.emit(false);
    }

    onOK() {
        this.confirm.emit();
    }
}
