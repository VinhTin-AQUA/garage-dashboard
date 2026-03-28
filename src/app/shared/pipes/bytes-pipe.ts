import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'bytes',
})
export class BytesPipe implements PipeTransform {
    transform(bytes: number, decimals: number = 2): unknown {
        if (!bytes) return '0 B';

        const k = 1024;
        const sizes = ['B', 'KB', 'MB', 'GB', 'TB'];

        const i = Math.floor(Math.log(bytes) / Math.log(k));
        const value = parseFloat((bytes / Math.pow(k, i)).toFixed(decimals));

        return `${value} ${sizes[i]}`;
    }
}
