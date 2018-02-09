import { dirname } from "path";
import {uploadFile} from 'imgur';


export class ImageLinks {
    small: string;
    big: string;
    appDir: string;

    constructor() {
        this.appDir = dirname(require.main.filename) + '/../../img/';
    }

    async upload() {
        this.big = (await uploadFile(this.appDir + 'big-image.png')).data.link;
        this.small = (await uploadFile(this.appDir + 'small-image.png')).data.link;
    }
}