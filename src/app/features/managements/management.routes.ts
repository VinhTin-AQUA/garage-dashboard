import { Routes } from '@angular/router';
import { ManagementRouteConstants } from '../../core/constants/route.constants';
import { Managements } from './managements';
import { AccessKey } from './access-key/access-key';
import { Block } from './block/block';
import { AdminAPIToken } from './admin-api-token/admin-api-token';
import { Bucket } from './bucket/bucket';
import { BucketAlias } from './bucket-alias/bucket-alias';
import { Cluster } from './cluster/cluster';
import { ClusterLayout } from './cluster-layout/cluster-layout';
import { Permission } from './permission/permission';
import { Node } from './node/node';
import { SpecialEndpoints } from './special-endpoints/special-endpoints';
import { Worker } from './worker/worker';

export const routes: Routes = [
    {
        path: '',
        component: Managements,
        children: [
            {
                path: ManagementRouteConstants.AccessKey.path,
                component: AccessKey,
                title: ManagementRouteConstants.AccessKey.name,
            },
            {
                path: ManagementRouteConstants.AdminApiToken.path,
                component: AdminAPIToken,
                title: ManagementRouteConstants.AdminApiToken.name,
            },
            {
                path: ManagementRouteConstants.Block.path,
                component: Block,
                title: ManagementRouteConstants.Block.name,
            },
            {
                path: ManagementRouteConstants.Bucket.path,
                component: Bucket,
                title: ManagementRouteConstants.Bucket.name,
            },
            {
                path: ManagementRouteConstants.BucketAlias.path,
                component: BucketAlias,
                title: ManagementRouteConstants.BucketAlias.name,
            },
            {
                path: ManagementRouteConstants.Cluster.path,
                component: Cluster,
                title: ManagementRouteConstants.Cluster.name,
            },
            {
                path: ManagementRouteConstants.ClusterLayout.path,
                component: ClusterLayout,
                title: ManagementRouteConstants.ClusterLayout.name,
            },
            {
                path: ManagementRouteConstants.Node.path,
                component: Node,
                title: ManagementRouteConstants.Node.name,
            },
            {
                path: ManagementRouteConstants.Permission.path,
                component: Permission,
                title: ManagementRouteConstants.Permission.name,
            },
            {
                path: ManagementRouteConstants.SpecialEndpoints.path,
                component: SpecialEndpoints,
                title: ManagementRouteConstants.SpecialEndpoints.name,
            },
            {
                path: ManagementRouteConstants.Worker.path,
                component: Worker,
                title: ManagementRouteConstants.Worker.name,
            },
            {
                path: '**',
                redirectTo: ManagementRouteConstants.AccessKey.path,
                pathMatch: 'full',
            },
        ],
    },
];
