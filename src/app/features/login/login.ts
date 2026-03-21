import { Component, signal } from '@angular/core';
import { form, required } from '@angular/forms/signals';
import { Button } from "../../shared/components/button/button";
import { TextInput } from '../../shared/components/text-input/text-input';

@Component({
    selector: 'app-login',
    imports: [Button, TextInput],
    templateUrl: './login.html',
    styleUrl: './login.css',
})
export class Login {
    loginData = signal<{ userName: string; password: string }>({
        userName: '',
        password: '',
    });

    loginForm = form(this.loginData, (op) => {
        required(op.userName);
        required(op.password);
    });

    constructor() {}

    signIn() {
        
    }
}

