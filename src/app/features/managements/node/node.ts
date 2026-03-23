import { Component, signal } from '@angular/core';
import { NodeService } from '../../../core/services/node.service';
import { NodeInfo, NodeStatistics } from './models/node.model';
import { ClusterService } from '../../../core/services/cluster.service';

@Component({
    selector: 'app-node',
    imports: [],
    templateUrl: './node.html',
    styleUrl: './node.css',
})
export class Node {
    nodeInfo = signal<NodeInfo>({
        nodeId: '',
        garageVersion: '',
        garageFeatures: ['', '', '', '', '', '', '', '', '', '', ''],
        rustVersion: '',
        dbEngine: '',
    });

    nodeStatistics = signal<NodeStatistics>({
        freeform: ``,
    });

    constructor(
        private nodeService: NodeService,
        private clusterService: ClusterService,
    ) {}

    ngOnInit() {
        this.getNode();
    }

    private getNode() {
        this.clusterService.getClusterStatus().subscribe({
            next: (res) => {
                if (res.nodes[0].id) {
                    this.getNodeInfo(res.nodes[0].id);
                    this.getNodeStatistics(res.nodes[0].id);
                }
            },
            error: (err) => {},
        });
    }

    private getNodeInfo(id: string) {
        this.nodeService.getNodeInfo(id).subscribe({
            next: (res) => {
                this.nodeInfo.set(res);
                console.log(res);
            },
            error: (err) => {},
        });
    }

    private getNodeStatistics(id: string) {
        this.nodeService.getNodeStatistics(id).subscribe({
            next: (res) => {
                this.nodeStatistics.set(res);
            },
            error: (err) => {},
        });
    }
}
