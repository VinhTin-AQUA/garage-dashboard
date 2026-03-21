import { NgComponentOutlet } from '@angular/common';
import { Component, Input, Type } from '@angular/core';
import {
    ArchiveIconComponent,
    BlockIconComponent,
    ClusterIconComponent,
    DarkIconComponent,
    HomeIconComponent,
    KeyIconComponent,
    LayoutIconComponent,
    LightIconComponent,
    LockIconComponent,
    MenuIconComponent,
    NodeIconComponent,
    PlugIconComponent,
    ShieldIconComponent,
    TagIconComponent,
    WorkerIconComponent,
} from './icon-items';

export const ICON_REGISTRY: Record<string, Type<any>> = {
    home: HomeIconComponent,
    menu: MenuIconComponent,
    key: KeyIconComponent,
    lock: LockIconComponent,
    block: BlockIconComponent,
    archive: ArchiveIconComponent,
    tag: TagIconComponent,
    cluster: ClusterIconComponent,
    layout: LayoutIconComponent,
    node: NodeIconComponent,
    shield: ShieldIconComponent,
    plug: PlugIconComponent,
    worker: WorkerIconComponent,
    light: LightIconComponent,
    dark: DarkIconComponent,
};

export type IconNames =
    | 'home'
    | 'menu'
    | 'key'
    | 'lock'
    | 'block'
    | 'archive'
    | 'tag'
    | 'cluster'
    | 'layout'
    | 'node'
    | 'shield'
    | 'plug'
    | 'worker'
    | 'light'
    | 'dark'
    | 'error';

@Component({
    selector: 'app-icons',
    imports: [NgComponentOutlet],
    templateUrl: './icons.html',
    styleUrl: './icons.css',
})
export class Icons {
    @Input() iconName: IconNames = 'error';

    iconComponent(): Type<any> | null {
        return ICON_REGISTRY[this.iconName] || null;
    }
}
