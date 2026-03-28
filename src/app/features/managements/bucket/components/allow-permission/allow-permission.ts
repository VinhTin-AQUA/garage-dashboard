import { Component, EventEmitter, Input, Output, signal } from '@angular/core';
import {
    AllowBucketPermissionModel,
    BucketDetailsModel,
} from '../../../../../core/models/buckket.model';
import { BucketService } from '../../../../../core/services/bucket.service';
import { AccessKeyModel } from '../../../../../core/models/access-key.model';
import { AccessKeyService } from '../../../../../core/services/access-key.service';
import { Checkbox } from '../../../../../shared/components/checkbox/checkbox';
import { Button } from '../../../../../shared/components/button/button';
import { OptionModel } from '../../../../../core/models/option.model';
import { SelectBox } from '../../../../../shared/components/select-box/select-box';
import { firstValueFrom } from 'rxjs';

@Component({
    selector: 'app-allow-permission',
    imports: [Checkbox, Button, SelectBox],
    templateUrl: './allow-permission.html',
    styleUrl: './allow-permission.css',
})
export class AllowPermission {
    @Input() id: string | null = null;

    bucketData = signal<BucketDetailsModel>({
        id: '',
        created: '',
        globalAliases: [],
        websiteAccess: false,
        websiteConfig: null,
        keys: [],
        objects: 0,
        bytes: 0,
        unfinishedUploads: 0,
        unfinishedMultipartUploads: 0,
        unfinishedMultipartUploadParts: 0,
        unfinishedMultipartUploadBytes: 0,
        quotas: {
            maxSize: null,
            maxObjects: null,
        },
    });

    keyOptions = signal<OptionModel[]>([]);

    allowData = signal<AllowBucketPermissionModel>({
        bucketId: '',
        accessKeyId: '',
        permissions: {
            owner: false,
            read: false,
            write: false,
        },
    });
    initialized = signal<boolean>(false);

    @Output() closeModal = new EventEmitter<void>();

    constructor(
        private bucketService: BucketService,
        private accessKeyService: AccessKeyService,
    ) {}

    async ngOnInit() {
        await this.loadBucket();
        await this.loadData();
        this.initialized.set(true);
    }

    private async loadBucket() {
        if (!this.id) {
            return;
        }

        const bucket = await firstValueFrom(this.bucketService.getBucketInfo(this.id));
        if (!bucket) {
            return;
        }

        this.bucketData.set(bucket);
        this.allowData.update((x) => {
            return { ...x, bucketId: bucket.id };
        });
    }

    private async loadData() {
        const keys = await firstValueFrom(this.accessKeyService.listKeys());
        if (!keys || keys.length == 0) {
            return;
        }

        const options = keys.map((x) => {
            const option: OptionModel = {
                disabled: false,
                label: x.name,
                value: x.id,
            };
            return option;
        });
        this.keyOptions.set(options);
        

        if (this.bucketData().keys && this.bucketData().keys.length > 0) {
            const keyInBucket = keys.find((x) => x.id === this.bucketData().keys[0].accessKeyId);

            if (!keyInBucket) {
                return;
            }

            this.allowData.update((x) => {
                return {
                    ...x,
                    accessKeyId: this.bucketData().keys[0].accessKeyId,
                    permissions: { ...this.bucketData().keys[0].permissions },
                };
            });
        } else {
            this.allowData.update((x) => {
                return {
                    ...x,
                    accessKeyId: options[0].value,
                };
            });
        }
    }

    onCloseModal() {
        this.closeModal.emit();
    }

    onAccessKeyChange(value: any) {
        this.allowData.update((x) => {
            x.accessKeyId = value;
            return x;
        });

        const keyInBucket = this.bucketData().keys.find((x) => x.accessKeyId === value);
        if (keyInBucket) {
            this.allowData.update((x) => {
                x.permissions = { ...keyInBucket.permissions };
                return x;
            });
        } else {
            this.allowData.update((x) => {
                x.permissions = {
                    owner: false,
                    read: false,
                    write: false,
                };
                return x;
            });
        }
    }

    onOwnerPerrmissionChange(value: any) {
        this.allowData.update((x) => {
            x.permissions.owner = value;
            return x;
        });
    }

    onReadPerrmissionChange(value: any) {
        this.allowData.update((x) => {
            x.permissions.read = value;
            return x;
        });
    }

    onWritePerrmissionChange(value: any) {
        this.allowData.update((x) => {
            x.permissions.write = value;
            return x;
        });
    }

    onAllow() {
        this.bucketService.allowPermission(this.allowData()).subscribe({
            next: async (res) => {
                await this.loadBucket();
            },
            error: (err) => {},
        });
    }
}
