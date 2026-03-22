import { Component } from '@angular/core';

@Component({
    selector: 'app-block',
    imports: [],
    templateUrl: './block.html',
    styleUrl: './block.css',
})
export class Block {
    constructor() {
        /*
        sample data
        {
            "code": "InvalidRequest",
            "message": "Bad request: Missing argument `node` for endpoint",
            "region": "garage",
            "path": "/v2/ListBlockErrors"
        }

        */
    }
}
