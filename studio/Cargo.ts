import { Payload } from "./Payload";

export class Cargo implements Payload {
    // properties and methods
    // Class Variables
    massKg: number;
    material: string;
    // constructor
    constructor(massKg: number, material: string){
        this.massKg = massKg
        this.material = material
    }
 }