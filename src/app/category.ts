import { Snipplet } from './snipplet';

export class Category {

    id: number;
    name:string;
    snipplets:Snipplet[];

    constructor(name:string){
        this.name = name;

    }
}
