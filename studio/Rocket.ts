import { Cargo } from "./Cargo";
import { Astronaut } from "./Astronaut";
import { Payload } from "./Payload";

export class Rocket {
    name: string;
    totalCapacityKg: number;
    cargoItems: Cargo[] = [];
    astronauts: Astronaut[] = [];


    // properties and methods

    //Constructor
    constructor(
        name: string, 
        totalCapacityKg: number) {
            this.name = name;
            this.totalCapacityKg = totalCapacityKg;
    }

    sumMass(items: Payload[]): number{
        let totalMass = 0;
        for (let i = 0; i < items.length; i++){
            totalMass += items[i].massKg;
        }
        return totalMass;
    }
    currentMassKg(): number{
        let astronautMass: number = this.sumMass(this.astronauts);
        let cargoMass: number = this.sumMass(this.cargoItems);
        return astronautMass + cargoMass;
    }
    canAdd(item: Payload): boolean {
        // let extraItemMass: number = this.currentMassKg() + item.massKg;
        // let isTooMuch: boolean = extraItemMass <= this.totalCapacityKg;
        // return isTooMuch
        return this.currentMassKg() + item.massKg <= this.totalCapacityKg;
    }
    addCargo(cargo: Cargo): boolean {
        if (this.canAdd(cargo)) {
            // if true, adds cargo to this.cargoItems and returns true
            this.cargoItems.push(cargo);
            return true;
        } else {
            //if false, returns false.
            return false
        }
    }
    addAstronaut(astronaut: Astronaut): boolean {
        if (this.canAdd(astronaut)) {     
            this.astronauts.push(astronaut);
            return true;    
        }
        return false;
    }
 }