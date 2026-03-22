import { Routes } from '@angular/router';
import { ManagementRouteConstants, RouteConstants } from './core/constants/route.constants';
import { Login } from './features/login/login';

export const routes: Routes = [
    {
        path: RouteConstants.Login.path,
        component: Login,
        title: RouteConstants.Login.name,
    },
    {
        path: ManagementRouteConstants.Managements.path,
        loadChildren: () =>
            import('./features/managements/management.routes').then((r) => r.routes),
    },
    {
        path: '',
        redirectTo: RouteConstants.Login.path,
        pathMatch: 'full',
    },
];
