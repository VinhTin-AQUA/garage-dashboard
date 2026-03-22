import { Component } from '@angular/core';
import {
    ClusterHealthModel,
    ClusterLayoutModel,
    ClusterStorageTextModel,
} from './models/cluster.model';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-cluster',
    imports: [CommonModule],
    templateUrl: './cluster.html',
    styleUrl: './cluster.css',
})
export class Cluster {
    health: ClusterHealthModel = {
        status: 'healthy',
        knownNodes: 1,
        connectedNodes: 1,
        storageNodes: 1,
        storageNodesUp: 1,
        partitions: 256,
        partitionsQuorum: 256,
        partitionsAllOk: 256,
    };

    storageText: ClusterStorageTextModel = {
        freeform: `Storage nodes:
ID                Hostname  Zone  Capacity   Part.  DataAvail                  MetaAvail
52e752abec6feed5  newtun    dc1   1048.6 KB  256    197.1 GB/348.7 GB (56.5%)  197.1 GB/348.7 GB (56.5%)

Estimated available storage space cluster-wide:
data: 197.1 GB
metadata: 197.1 GB`,
    };

    layout: ClusterLayoutModel = {
        layoutVersion: 2,
        nodes: [
            {
                id: '52e752abec6feed50e2690c2712ab2861a2645f38e19b91bcc160d6632a57164',
                garageVersion: 'v2.2.0',
                addr: '192.168.1.56:3901',
                hostname: 'newtun',
                isUp: true,
                lastSeenSecsAgo: null,
                role: {
                    zone: 'dc1',
                    tags: [],
                    capacity: 1048576,
                },
                draining: false,
                dataPartition: {
                    available: 197101887488,
                    total: 348696031232,
                },
                metadataPartition: {
                    available: 197101887488,
                    total: 348696031232,
                },
            },
        ],
    };

    formatBytes(bytes: number): string {
        return (bytes / 1024 ** 3).toFixed(1) + ' GB';
    }
}
