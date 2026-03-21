import { Component } from '@angular/core';

/* home */

@Component({
    selector: 'lib-icon-home',
    standalone: true,
    template: `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path
                d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z"
            />
            <path
                d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z"
            />
        </svg>
    `,
})
export class HomeIconComponent {}

/* menu */

@Component({
    selector: 'lib-icon-menu',
    standalone: true,
    template: `
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
        >
            <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 12h18M3 6h18M3 18h18"
            />
        </svg>
    `,
})
export class MenuIconComponent {}

/* key */

@Component({
    selector: 'lib-icon-menu',
    standalone: true,
    template: `
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
        >
            <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 5.25a3 3 0 0 1 3 3m3 0a6 6 0 0 1-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1 1 21.75 8.25Z"
            />
        </svg>
    `,
})
export class KeyIconComponent {}

/* lock */

@Component({
    selector: 'lib-icon-menu',
    standalone: true,
    template: `
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
        >
            <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
            />
        </svg>
    `,
})
export class LockIconComponent {}

/* block */

@Component({
    selector: 'lib-icon-menu',
    standalone: true,
    template: `
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            version="1.1"
            viewBox="0 0 256 256"
            xml:space="preserve"
        >
            <g
                style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;"
                transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)"
            >
                <path
                    d="M 45 41.519 c -0.149 0 -0.299 -0.034 -0.437 -0.101 L 3.904 21.659 c -0.344 -0.167 -0.563 -0.517 -0.563 -0.899 s 0.219 -0.732 0.563 -0.899 L 44.563 0.101 c 0.275 -0.134 0.599 -0.134 0.874 0 L 86.096 19.86 c 0.344 0.167 0.563 0.517 0.563 0.899 s -0.219 0.732 -0.563 0.899 L 45.437 41.418 C 45.299 41.485 45.149 41.519 45 41.519 z M 6.629 20.759 L 45 39.407 l 38.37 -18.647 L 45 2.112 L 6.629 20.759 z"
                    style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;"
                    transform=" matrix(1 0 0 1 0 0) "
                    stroke-linecap="round"
                />
                <path
                    d="M 45 90 c -0.149 0 -0.299 -0.033 -0.437 -0.101 L 3.904 70.141 c -0.344 -0.167 -0.563 -0.517 -0.563 -0.899 V 20.759 c 0 -0.345 0.177 -0.665 0.469 -0.848 c 0.294 -0.183 0.659 -0.203 0.968 -0.052 L 45 39.407 L 85.221 19.86 c 0.311 -0.15 0.677 -0.131 0.968 0.052 c 0.292 0.183 0.47 0.503 0.47 0.848 v 48.482 c 0 0.383 -0.219 0.732 -0.563 0.899 L 45.437 89.899 C 45.299 89.967 45.149 90 45 90 z M 5.341 68.615 L 45 87.888 l 39.658 -19.272 V 22.357 L 45.437 41.418 c -0.275 0.134 -0.599 0.134 -0.874 0 L 5.341 22.357 V 68.615 z"
                    style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;"
                    transform=" matrix(1 0 0 1 0 0) "
                    stroke-linecap="round"
                />
                <path
                    d="M 45 90 c -0.552 0 -1 -0.447 -1 -1 V 40.519 c 0 -0.552 0.448 -1 1 -1 s 1 0.448 1 1 V 89 C 46 89.553 45.552 90 45 90 z"
                    style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;"
                    transform=" matrix(1 0 0 1 0 0) "
                    stroke-linecap="round"
                />
            </g>
        </svg>
    `,
})
export class BlockIconComponent {}

/* archive */

@Component({
    selector: 'lib-icon-menu',
    standalone: true,
    template: `
        <svg
            fill="currentColor"
            viewBox="-2 -2 24 24"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMinYMin"
        >
            <path
                d="M17 5H1a1 1 0 0 1-1-1V1a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-2zm1 2v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7h16zM8 14a1 1 0 0 0 0 2h4a1 1 0 0 0 0-2H8z"
            ></path>
        </svg>
    `,
})
export class ArchiveIconComponent {}

/* tag */

@Component({
    selector: 'lib-icon-menu',
    standalone: true,
    template: `
        <svg fill="currentColor" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M 16 5 L 15.6875 5.28125 L 4.28125 16.8125 L 3.59375 17.5 L 4.28125 18.21875 L 13.78125 27.71875 L 14.5 28.40625 L 15.1875 27.71875 L 26.71875 16.3125 L 27 16 L 27 5 Z M 16.84375 7 L 25 7 L 25 15.15625 L 14.5 25.59375 L 6.40625 17.5 Z M 22 9 C 21.449219 9 21 9.449219 21 10 C 21 10.550781 21.449219 11 22 11 C 22.550781 11 23 10.550781 23 10 C 23 9.449219 22.550781 9 22 9 Z"
            ></path>
        </svg>
    `,
})
export class TagIconComponent {}

/* cluster */

@Component({
    selector: 'lib-icon-menu',
    standalone: true,
    template: `
        <svg
            fill="currentColor"
            viewBox="0 0 36 36"
            version="1.1"
            preserveAspectRatio="xMidYMid meet"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
        >
            <title>data-cluster-outline-alerted</title>
            <path
                d="M4,18.24V7.91c0-.65,2.09-1.84,5.5-1.84S15,7.27,15,7.91V9.7a18.75,18.75,0,0,1,2-.2V7.91c0-2.52-3.77-3.84-7.5-3.84S2,5.4,2,7.91V18.24C2,20.4,4.77,21.67,7.9,22V20C5.46,19.68,4,18.78,4,18.24Z"
                class="clr-i-outline--alerted clr-i-outline-path-1--alerted"
            ></path>
            <path
                d="M24.65,18.52c-.85,1-3.42,2-6.65,2A14.49,14.49,0,0,1,14,20v1.46a16.33,16.33,0,0,0,4,.47,12.76,12.76,0,0,0,6.65-1.56v3.12c-.85,1-3.42,2-6.65,2a14.49,14.49,0,0,1-4-.53v1.46a16.33,16.33,0,0,0,4,.47,12.76,12.76,0,0,0,6.65-1.56v2.29c0,.95-2.65,2.38-6.65,2.38s-6.65-1.43-6.65-2.38V15.23c0-.95,2.65-2.38,6.65-2.38l.75,0a3.69,3.69,0,0,1-.08-2l-.66,0c-4.93,0-8.65,1.88-8.65,4.38V27.54c0,2.5,3.72,4.38,8.65,4.38s8.65-1.88,8.65-4.38V15.4h-2Z"
                class="clr-i-outline--alerted clr-i-outline-path-2--alerted"
            ></path>
            <path
                d="M22,4.8c-1.75.63-3,1.68-3,3.12V9.5l.25,0Z"
                class="clr-i-outline--alerted clr-i-outline-path-3--alerted"
            ></path>
            <path
                d="M33.68,15.4H32v2.84c0,.54-1.46,1.44-3.9,1.73v2c3.13-.32,5.9-1.6,5.9-3.75V15.38Z"
                class="clr-i-outline--alerted clr-i-outline-path-4--alerted"
            ></path>
            <path
                d="M26.85,1.14,21.13,11A1.28,1.28,0,0,0,22.23,13H33.68A1.28,1.28,0,0,0,34.78,11L29.06,1.14A1.28,1.28,0,0,0,26.85,1.14Z"
                class="clr-i-outline--alerted clr-i-outline-path-5--alerted clr-i-alert"
            ></path>
            <rect x="0" y="0" width="36" height="36" fill-opacity="0"></rect>
        </svg>
    `,
})
export class ClusterIconComponent {}

/* layout */

@Component({
    selector: 'lib-icon-menu',
    standalone: true,
    template: `
        <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <g data-name="Layer 2">
                <g data-name="layout">
                    <rect width="24" height="24" opacity="0"></rect>

                    <path
                        d="M18 3H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3zM6 5h12a1 1 0 0 1 1 1v2H5V6a1 1 0 0 1 1-1zM5 18v-8h6v9H6a1 1 0 0 1-1-1zm13 1h-5v-9h6v8a1 1 0 0 1-1 1z"
                    ></path>
                </g>
            </g>
        </svg>
    `,
})
export class LayoutIconComponent {}

/* node */

@Component({
    selector: 'lib-icon-menu',
    standalone: true,
    template: `<svg
        fill="currentColor"
        viewBox="0 0 1024 1024"
        class="icon"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
    >
        <defs><style type="text/css"></style></defs>
        <path
            d="M843.5 737.4c-12.4-75.2-79.2-129.1-155.3-125.4S550.9 676 546 752c-153.5-4.8-208-40.7-199.1-113.7 3.3-27.3 19.8-41.9 50.1-49 18.4-4.3 38.8-4.9 57.3-3.2 1.7 0.2 3.5 0.3 5.2 0.5 11.3 2.7 22.8 5 34.3 6.8 34.1 5.6 68.8 8.4 101.8 6.6 92.8-5 156-45.9 159.2-132.7 3.1-84.1-54.7-143.7-147.9-183.6-29.9-12.8-61.6-22.7-93.3-30.2-14.3-3.4-26.3-5.7-35.2-7.2-7.9-75.9-71.5-133.8-147.8-134.4-76.3-0.6-140.9 56.1-150.1 131.9s40 146.3 114.2 163.9c74.2 17.6 149.9-23.3 175.7-95.1 9.4 1.7 18.7 3.6 28 5.8 28.2 6.6 56.4 15.4 82.4 26.6 70.7 30.2 109.3 70.1 107.5 119.9-1.6 44.6-33.6 65.2-96.2 68.6-27.5 1.5-57.6-0.9-87.3-5.8-8.3-1.4-15.9-2.8-22.6-4.3-3.9-0.8-6.6-1.5-7.8-1.8l-3.1-0.6c-2.2-0.3-5.9-0.8-10.7-1.3-25-2.3-52.1-1.5-78.5 4.6-55.2 12.9-93.9 47.2-101.1 105.8-15.7 126.2 78.6 184.7 276 188.9 29.1 70.4 106.4 107.9 179.6 87 73.3-20.9 119.3-93.4 106.9-168.6zM329.1 345.2c-46 0-83.3-37.3-83.3-83.3s37.3-83.3 83.3-83.3 83.3 37.3 83.3 83.3-37.3 83.3-83.3 83.3zM695.6 845c-46 0-83.3-37.3-83.3-83.3s37.3-83.3 83.3-83.3 83.3 37.3 83.3 83.3-37.3 83.3-83.3 83.3z"
            p-id="12712"
        ></path>
    </svg>`,
})
export class NodeIconComponent {}

/* shield */

@Component({
    selector: 'lib-icon-menu',
    standalone: true,
    template: `<svg fill="currentColor" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M 16 4 C 13.75 4 12.234375 4.886719 10.875 5.625 C 9.515625 6.363281 8.28125 7 6 7 L 5 7 L 5 8 C 5 15.71875 7.609375 20.742188 10.25 23.78125 C 12.890625 26.820313 15.625 27.9375 15.625 27.9375 L 16 28.0625 L 16.375 27.9375 C 16.375 27.9375 19.109375 26.84375 21.75 23.8125 C 24.390625 20.78125 27 15.746094 27 8 L 27 7 L 26 7 C 23.730469 7 22.484375 6.363281 21.125 5.625 C 19.765625 4.886719 18.25 4 16 4 Z M 16 6 C 17.75 6 18.753906 6.613281 20.15625 7.375 C 21.339844 8.019531 22.910156 8.636719 24.9375 8.84375 C 24.746094 15.609375 22.507813 19.910156 20.25 22.5 C 18.203125 24.847656 16.484375 25.628906 16 25.84375 C 15.511719 25.625 13.796875 24.824219 11.75 22.46875 C 9.492188 19.871094 7.253906 15.578125 7.0625 8.84375 C 9.097656 8.636719 10.660156 8.019531 11.84375 7.375 C 13.246094 6.613281 14.25 6 16 6 Z"
        ></path>
    </svg>`,
})
export class ShieldIconComponent {}

/* plug */

@Component({
    selector: 'lib-icon-menu',
    standalone: true,
    template: `<svg
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        version="1.1"
        viewBox="0 0 256 256"
        xml:space="preserve"
        fill="currentColor"
        stroke="currentColor"
    >
        <g transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)">
            <path
                d="M 45 0 C 20.187 0 0 20.187 0 45 c 0 13.702 6.131 26.491 16.822 35.088 l 2.507 -3.117 C 9.587 69.138 4 57.484 4 45 C 4 22.393 22.393 4 45 4 s 41 18.393 41 41 c 0 21.937 -17.318 39.905 -39 40.952 V 71.407 h 5.202 c 6.306 0 11.436 -5.13 11.436 -11.436 V 34.96 h -7.517 V 24.922 h -6 V 34.96 H 39.879 V 24.922 h -6 V 34.96 h -7.517 v 25.011 c 0 6.306 5.13 11.436 11.436 11.436 H 43 V 90 h 2 c 24.813 0 45 -20.187 45 -45 C 90 20.187 69.813 0 45 0 z M 30.362 59.972 V 38.96 h 29.276 v 21.011 c 0 4.1 -3.336 7.436 -7.436 7.436 H 37.798 C 33.698 67.407 30.362 64.071 30.362 59.972 z"
                transform=" matrix(1 0 0 1 0 0) "
                stroke-linecap="round"
            />
        </g>
    </svg>`,
})
export class PlugIconComponent {}

/* worker */

@Component({
    selector: 'lib-icon-menu',
    standalone: true,
    template: `<svg
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        version="1.1"
        viewBox="0 0 256 256"
        xml:space="preserve"
        fill="currentColor"
        stroke="currentColor"
    >
        <g transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)">
            <path
                d="M 44.966 36.877 c -9.404 0 -17.055 -7.651 -17.055 -17.055 c 0 -9.404 7.651 -17.055 17.055 -17.055 s 17.055 7.651 17.055 17.055 C 62.021 29.227 54.37 36.877 44.966 36.877 z M 44.966 4.768 c -8.301 0 -15.055 6.753 -15.055 15.055 s 6.754 15.055 15.055 15.055 c 8.301 0 15.055 -6.754 15.055 -15.055 S 53.267 4.768 44.966 4.768 z"
                transform=" matrix(1 0 0 1 0 0) "
                stroke-linecap="round"
            />
            <path
                d="M 44.966 24.208 c -2.867 0 -5.199 -2.332 -5.199 -5.199 v -2.47 c 0 -2.867 2.332 -5.199 5.199 -5.199 c 2.867 0 5.199 2.333 5.199 5.199 v 2.47 C 50.165 21.875 47.833 24.208 44.966 24.208 z M 44.966 13.339 c -1.764 0 -3.199 1.435 -3.199 3.199 v 2.47 c 0 1.764 1.435 3.199 3.199 3.199 s 3.199 -1.435 3.199 -3.199 v -2.47 C 48.165 14.774 46.729 13.339 44.966 13.339 z"
                transform=" matrix(1 0 0 1 0 0) "
                stroke-linecap="round"
            />
            <path
                d="M 44.966 36.877 c -2.438 0 -4.8 -0.509 -7.02 -1.512 c -0.358 -0.162 -0.588 -0.518 -0.588 -0.911 v -4.639 c 0 -4.195 3.413 -7.607 7.607 -7.607 c 4.194 0 7.607 3.413 7.607 7.607 v 4.639 c 0 0.393 -0.23 0.75 -0.588 0.911 C 49.767 36.369 47.405 36.877 44.966 36.877 z M 39.358 33.794 c 3.571 1.438 7.645 1.438 11.215 0 v -3.979 c 0 -3.092 -2.516 -5.607 -5.607 -5.607 s -5.607 2.516 -5.607 5.607 V 33.794 z M 51.573 34.454 h 0.01 H 51.573 z"
                transform=" matrix(1 0 0 1 0 0) "
                stroke-linecap="round"
            />
            <path
                d="M 44.966 52.976 c -0.552 0 -1 -0.447 -1 -1 V 41.022 c 0 -0.552 0.448 -1 1 -1 s 1 0.448 1 1 v 10.954 C 45.966 52.528 45.518 52.976 44.966 52.976 z"
                transform=" matrix(1 0 0 1 0 0) "
                stroke-linecap="round"
            />
            <path
                d="M 35.607 58.362 c -0.346 0 -0.683 -0.18 -0.868 -0.501 c -0.275 -0.479 -0.111 -1.09 0.368 -1.366 l 9.36 -5.387 c 0.479 -0.274 1.091 -0.11 1.366 0.368 c 0.276 0.479 0.111 1.09 -0.368 1.366 l -9.36 5.387 C 35.948 58.319 35.776 58.362 35.607 58.362 z"
                transform=" matrix(1 0 0 1 0 0) "
                stroke-linecap="round"
            />
            <path
                d="M 54.325 58.362 c -0.169 0 -0.341 -0.043 -0.498 -0.133 l -9.36 -5.387 c -0.479 -0.276 -0.643 -0.888 -0.368 -1.366 c 0.275 -0.478 0.888 -0.642 1.366 -0.368 l 9.36 5.387 c 0.479 0.276 0.644 0.888 0.368 1.366 C 55.008 58.183 54.671 58.362 54.325 58.362 z"
                transform=" matrix(1 0 0 1 0 0) "
                stroke-linecap="round"
            />
            <path
                d="M 30.803 87.232 H 3.307 C 1.483 87.232 0 85.749 0 83.926 V 63.673 c 0 -1.823 1.483 -3.307 3.307 -3.307 h 8.778 c 1.384 0 2.732 0.569 3.697 1.562 l 2.511 2.581 c 0.591 0.607 1.417 0.956 2.264 0.956 h 10.246 c 1.824 0 3.307 1.483 3.307 3.307 v 15.154 C 34.11 85.749 32.626 87.232 30.803 87.232 z M 3.307 62.366 C 2.586 62.366 2 62.952 2 63.673 v 20.253 c 0 0.721 0.586 1.307 1.307 1.307 h 27.496 c 0.721 0 1.307 -0.586 1.307 -1.307 V 68.771 c 0 -0.721 -0.586 -1.307 -1.307 -1.307 H 20.557 c -1.384 0 -2.732 -0.569 -3.698 -1.562 l 0 0 l -2.511 -2.581 c -0.591 -0.607 -1.416 -0.956 -2.264 -0.956 H 3.307 z"
                transform=" matrix(1 0 0 1 0 0) "
                stroke-linecap="round"
            />
            <path
                d="M 30.406 67.465 c -0.552 0 -1 -0.447 -1 -1 v -2.343 c 0 -0.586 -0.477 -1.063 -1.063 -1.063 H 14.378 c -0.552 0 -1 -0.447 -1 -1 s 0.448 -1 1 -1 h 13.964 c 1.689 0 3.063 1.374 3.063 3.063 v 2.343 C 31.406 67.018 30.958 67.465 30.406 67.465 z"
                transform=" matrix(1 0 0 1 0 0) "
                stroke-linecap="round"
            />
            <path
                d="M 86.693 87.232 H 59.197 c -1.824 0 -3.308 -1.483 -3.308 -3.307 V 63.673 c 0 -1.823 1.483 -3.307 3.308 -3.307 h 8.777 c 1.385 0 2.732 0.569 3.698 1.562 l 2.511 2.581 l 0 0 c 0.591 0.607 1.416 0.956 2.264 0.956 h 10.246 c 1.823 0 3.307 1.483 3.307 3.307 v 15.154 C 90 85.749 88.517 87.232 86.693 87.232 z M 59.197 62.366 c -0.721 0 -1.308 0.586 -1.308 1.307 v 20.253 c 0 0.721 0.587 1.307 1.308 1.307 h 27.496 c 0.721 0 1.307 -0.586 1.307 -1.307 V 68.771 c 0 -0.721 -0.586 -1.307 -1.307 -1.307 H 76.447 c -1.385 0 -2.732 -0.569 -3.697 -1.562 l -2.511 -2.581 c -0.591 -0.607 -1.417 -0.956 -2.265 -0.956 H 59.197 z"
                transform=" matrix(1 0 0 1 0 0) "
                stroke-linecap="round"
            />
            <path
                d="M 86.296 67.465 c -0.553 0 -1 -0.447 -1 -1 v -2.343 c 0 -0.586 -0.478 -1.063 -1.063 -1.063 H 70.27 c -0.553 0 -1 -0.447 -1 -1 s 0.447 -1 1 -1 h 13.963 c 1.689 0 3.063 1.374 3.063 3.063 v 2.343 C 87.296 67.018 86.849 67.465 86.296 67.465 z"
                transform=" matrix(1 0 0 1 0 0) "
                stroke-linecap="round"
            />
        </g>
    </svg>`,
})
export class WorkerIconComponent {}

/* light */

@Component({
    selector: 'lib-icon-menu',
    standalone: true,
    template: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor">
        <path
            d="M565-395q35-35 35-85t-35-85q-35-35-85-35t-85 35q-35 35-35 85t35 85q35 35 85 35t85-35Zm-226.5 56.5Q280-397 280-480t58.5-141.5Q397-680 480-680t141.5 58.5Q680-563 680-480t-58.5 141.5Q563-280 480-280t-141.5-58.5ZM200-440H40v-80h160v80Zm720 0H760v-80h160v80ZM440-760v-160h80v160h-80Zm0 720v-160h80v160h-80ZM256-650l-101-97 57-59 96 100-52 56Zm492 496-97-101 53-55 101 97-57 59Zm-98-550 97-101 59 57-100 96-56-52ZM154-212l101-97 55 53-97 101-59-57Zm326-268Z"
        />
    </svg>`,
})
export class LightIconComponent {}

/* dark */

@Component({
    selector: 'lib-icon-menu',
    standalone: true,
    template: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor">
        <path
            d="M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q14 0 27.5 1t26.5 3q-41 29-65.5 75.5T444-660q0 90 63 153t153 63q55 0 101-24.5t75-65.5q2 13 3 26.5t1 27.5q0 150-105 255T480-120Zm0-80q88 0 158-48.5T740-375q-20 5-40 8t-40 3q-123 0-209.5-86.5T364-660q0-20 3-40t8-40q-78 32-126.5 102T200-480q0 116 82 198t198 82Zm-10-270Z"
        />
    </svg>`,
})
export class DarkIconComponent {}

/* common */

@Component({
    selector: 'lib-icon-menu',
    standalone: true,
    template: ``,
})
export class CommonIconComponent {}
