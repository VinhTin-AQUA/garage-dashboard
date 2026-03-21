interface RouteModel {
    path: string;
    name: string;
}

export const RouteConstants = {
    Login: {
        path: 'login',
        name: 'Login',
    },
} as const satisfies Record<string, RouteModel>;

export const ManagementRouteConstants = {
    Managements: {
        path: 'managements',
        name: 'Managements',
    },
    AccessKey: {
        path: 'access-key',
        name: 'AccessKey',
    },
    AdminApiToken: {
        path: 'admin-api-token',
        name: 'AdminApiToken',
    },
    Block: {
        path: 'block',
        name: 'Block',
    },
    Bucket: {
        path: 'bucket',
        name: 'Bucket',
    },
    BucketAlias: {
        path: 'bucket-alias',
        name: 'BucketAlias',
    },
    Cluster: {
        path: 'cluster',
        name: 'Cluster',
    },
    ClusterLayout: {
        path: 'cluster-layout',
        name: 'ClusterLayout',
    },
    Node: {
        path: 'node',
        name: 'Node',
    },
    Permission: {
        path: 'permission',
        name: 'Permission',
    },
    SpecialEndpoints: {
        path: 'special-endpoints',
        name: 'SpecialEndpoints',
    },
    Worker: {
        path: 'worker',
        name: 'Worker',
    },
} as const satisfies Record<string, RouteModel>;
