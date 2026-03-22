import { Component, signal } from '@angular/core';
import { form, required } from '@angular/forms/signals';
import { Button } from '../../shared/components/button/button';
import { TextInput } from '../../shared/components/text-input/text-input';
import { Router } from '@angular/router';
import { ManagementRouteConstants } from '../../core/constants/route.constants';

@Component({
    selector: 'app-login',
    imports: [Button, TextInput],
    templateUrl: './login.html',
    styleUrl: './login.css',
})
export class Login {
    loginData = signal<{ adminToken: string }>({
        adminToken: '',
    });

    loginForm = form(this.loginData, (op) => {
        required(op.adminToken);
    });

    constructor(private router: Router) {}

    genTokenAdmin() {}

    goToManager() {
        this.router.navigateByUrl(ManagementRouteConstants.Managements.path);
    }
}
