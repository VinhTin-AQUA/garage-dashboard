import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClusterHealth, ClusterStatistics, ClusterStatus } from './models/cluster.model';
import { ClusterService } from '../../../core/services/cluster.service';

@Component({
    selector: 'app-cluster',
    imports: [CommonModule],
    templateUrl: './cluster.html',
    styleUrl: './cluster.css',
})
export class Cluster {
    health = signal<ClusterHealth>({
        status: '',
        knownNodes: 0,
        connectedNodes: 0,
        storageNodes: 0,
        storageNodesUp: 0,
        partitions: 0,
        partitionsQuorum: 0,
        partitionsAllOk: 0,
    });

    clusterStatistics = signal<ClusterStatistics>({
        freeform: ``,
    });

    clusterStatus = signal<ClusterStatus>({
        layoutVersion: -1,
        nodes: [
            {
                id: '',
                garageVersion: '',
                addr: '',
                hostname: '',
                isUp: false,
                lastSeenSecsAgo: null,
                role: {
                    zone: '',
                    tags: [],
                    capacity: -1,
                },
                draining: false,
                dataPartition: {
                    available: -1,
                    total: -1,
                },
                metadataPartition: {
                    available: -1,
                    total: -1,
                },
            },
        ],
    });

    constructor(private clusterService: ClusterService) {}

    ngOnInit() {
        this.clusterService.getClusterHealth().subscribe({
            next: (res) => {
                this.health.set(res);
            },
            error: (err) => {},
        });

        this.clusterService.getClusterStatistics().subscribe({
            next: (res) => {
                this.clusterStatistics.set(res);
            },
            error: (err) => {},
        });

        this.clusterService.getClusterStatus().subscribe({
            next: (res) => {
                this.clusterStatus.set(res);
            },
            error: (err) => {},
        });
    }

    formatBytes(bytes: number): string {
        return (bytes / 1024 ** 3).toFixed(1) + ' GB';
    }
}
