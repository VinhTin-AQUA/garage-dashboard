import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { firstValueFrom } from 'rxjs';

export const APP_THEMES = {
    Light: 'light',
    Dark: 'dark',
} as const;
export type AppThemeType = (typeof APP_THEMES)[keyof typeof APP_THEMES];

export type AppTheme = {
    foreground: string;
    background: string;
    black: string;
    red: string;
    green: string;
    yellow: string;
    blue: string;
    magenta: string;
    cyan: string;
    white: string;
    brightBlack: string;
    brightRed: string;
    brightGreen: string;
    brightYellow: string;
    brightBlue: string;
    brightMagenta: string;
    brightCyan: string;
    brightWhite: string;
    cursor: string;
    cursorAccent: string;
    highlight: string;
};

@Injectable({
    providedIn: 'root',
})
export class ThemeService {
    appThemes = signal<Record<string, AppTheme>>({});
    themeKey = 'theme';

    constructor(private http: HttpClient) {}

    async init() {
        // themes
        const themes = await firstValueFrom(
            this.http.get<Record<string, AppTheme>>('themes/themes.json'),
        );

        this.appThemes.set(themes);
        const theme = this.getTheme();
        this.applyThemeToDOM(theme);
    }

    setTheme(type: AppThemeType) {
        localStorage.setItem(this.themeKey, type);
        this.applyThemeToDOM(type);
    }

    getTheme() {
        let theme = localStorage.getItem(this.themeKey) as AppThemeType;
        if (!theme) {
            theme = APP_THEMES.Light;
        }

        return theme;
    }

    private applyThemeToDOM(type: AppThemeType) {
        const root = document.documentElement;
        const selectedTheme: AppTheme = this.appThemes()[type];

        Object.entries(selectedTheme).forEach(([key, value]) => {
            root.style.setProperty(`--${key}`, value);
        });
    }
}
