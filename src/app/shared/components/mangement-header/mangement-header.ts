import { Component } from '@angular/core';
import { ThemeService } from '../../../core/services/theme.service';
import { Icons } from '../icons/icons';
import { Bucket } from "../../../features/managements/bucket/bucket";
import { Button } from "../button/button";

@Component({
    selector: 'app-mangement-header',
    imports: [Icons, Bucket, Button],
    templateUrl: './mangement-header.html',
    styleUrl: './mangement-header.css',
})
export class MangementHeader {
    openMenu = false;

    constructor(public themeService: ThemeService) {}

    toggleTheme() {
        if (this.themeService.getTheme() === 'light') {
            this.themeService.setTheme('dark');
        } else {
            this.themeService.setTheme('light');
        }
    }

    toggleMenu() {
        this.openMenu = !this.openMenu;
    }
}
