import { Component, signal } from '@angular/core';
import { IconNames, Icons } from '../icons/icons';
import { Button } from '../button/button';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ManagementRouteConstants } from '../../../core/constants/route.constants';

export interface MenuItem {
    name: string;
    icon: IconNames;
    url: string;
}

@Component({
    selector: 'app-sidebar',
    imports: [Button, Icons, RouterLink, RouterLinkActive],
    templateUrl: './sidebar.html',
    styleUrl: './sidebar.css',
})
export class Sidebar {
    isOpen = signal<boolean>(true);
    menuItems: MenuItem[] = [
        {
            name: ManagementRouteConstants.AccessKey.name,
            icon: 'key',
            url: `/${ManagementRouteConstants.Managements.path}/${ManagementRouteConstants.AccessKey.path}`,
        },
        {
            name: ManagementRouteConstants.AdminApiToken.name,
            icon: 'lock',
            url: `/${ManagementRouteConstants.Managements.path}/${ManagementRouteConstants.AdminApiToken.path}`,
        },
        {
            name: ManagementRouteConstants.Block.name,
            icon: 'block',
            url: `/${ManagementRouteConstants.Managements.path}/${ManagementRouteConstants.Block.path}`,
        },
        {
            name: ManagementRouteConstants.Bucket.name,
            icon: 'archive',
            url: `/${ManagementRouteConstants.Managements.path}/${ManagementRouteConstants.Bucket.path}`,
        },
        {
            name: ManagementRouteConstants.BucketAlias.name,
            icon: 'tag',
            url: `/${ManagementRouteConstants.Managements.path}/${ManagementRouteConstants.BucketAlias.path}`,
        },
        {
            name: ManagementRouteConstants.Cluster.name,
            icon: 'cluster',
            url: `/${ManagementRouteConstants.Managements.path}/${ManagementRouteConstants.Cluster.path}`,
        },
        {
            name: ManagementRouteConstants.ClusterLayout.name,
            icon: 'layout',
            url: `/${ManagementRouteConstants.Managements.path}/${ManagementRouteConstants.ClusterLayout.path}`,
        },
        {
            name: ManagementRouteConstants.Node.name,
            icon: 'node',
            url: `/${ManagementRouteConstants.Managements.path}/${ManagementRouteConstants.Node.path}`,
        },
        {
            name: ManagementRouteConstants.Permission.name,
            icon: 'shield',
            url: `/${ManagementRouteConstants.Managements.path}/${ManagementRouteConstants.Permission.path}`,
        },
        {
            name: ManagementRouteConstants.SpecialEndpoints.name,
            icon: 'plug',
            url: `/${ManagementRouteConstants.Managements.path}/${ManagementRouteConstants.SpecialEndpoints.path}`,
        },
        {
            name: ManagementRouteConstants.Worker.name,
            icon: 'worker',
            url: `/${ManagementRouteConstants.Managements.path}/${ManagementRouteConstants.Worker.path}`,
        },
    ];

    toggleSidebar() {
        this.isOpen.set(!this.isOpen());
    }
}
