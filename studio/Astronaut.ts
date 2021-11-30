import { Payload } from "./Payload";

export class Astronaut implements Payload {
    // properties and methods
    // Class Variables
    massKg: number;
    name: string;

    // Constructor
    constructor(massKg: number, name: string) {
        this.massKg = massKg;
        this.name = name;
    }
 }