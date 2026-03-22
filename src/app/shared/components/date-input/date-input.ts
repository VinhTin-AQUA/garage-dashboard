import { Component, EventEmitter, forwardRef, Input, Output, signal } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { FormField, FieldTree } from '@angular/forms/signals';
import { OptionModel } from '../../../core/models/option.model';

@Component({
    selector: 'app-date',
    imports: [FormField],
    templateUrl: './date-input.html',
    styleUrl: './date-input.css',
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => DateInput),
            multi: true,
        },
    ],
})
export class DateInput implements ControlValueAccessor {
    // ====== Inputs ======
    @Input() formField?: FieldTree<string>;
    @Input() label = '';
    @Input() value: any = '';
    @Input() placeholder = '';
    @Input() disabled = false;
    @Input() readonly = false;
    @Input() id = crypto.randomUUID().toString();

    @Output() valueChange = new EventEmitter<string>();

    // ====== Autocomplete State ======
    showDropdown = signal<boolean>(false);
    filteredOptions: OptionModel[] = [];
    dropdownPosition: 'above' | 'below' = 'below';

    // ====== ControlValueAccessor ======
    private onChange: (value: string) => void = () => {};
    private onTouched: () => void = () => {};

    writeValue(val: string): void {
        this.value = val ?? '';
    }

    registerOnChange(fn: (value: string) => void): void {
        this.onChange = fn;
    }

    registerOnTouched(fn: () => void): void {
        this.onTouched = fn;
    }

    setDisabledState(isDisabled: boolean): void {
        this.disabled = isDisabled;
    }

    // ====== Event ======
    onInputChange(event: Event) {
        const newValue = (event.target as HTMLInputElement).value;
        this.value = newValue;

        if (this.formField) {
            this.formField()!.controlValue.set(newValue);
        }

        this.onChange(newValue);
        this.valueChange.emit(newValue);

        this.showDropdown.set(true);
    }

    onFocus(event: FocusEvent) {
        const input = event.target as HTMLElement;
        this.updateDropdownPosition(input);
        this.showDropdown.set(true);
    }

    onBlur() {
        this.onTouched();

        // delay để click option không bị mất
        setTimeout(() => {
            this.showDropdown.set(false);
        }, 150);
    }

    // ====== Autocomplete Logic ======

    updateDropdownPosition(input: HTMLElement) {
        const rect = input.getBoundingClientRect();
        const spaceBelow = window.innerHeight - rect.bottom;
        const spaceAbove = rect.top;

        // 240 = max-height dropdown
        if (spaceBelow < 240 && spaceAbove > spaceBelow) {
            this.dropdownPosition = 'above';
        } else {
            this.dropdownPosition = 'below';
        }
    }
}
