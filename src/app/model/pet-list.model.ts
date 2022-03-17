import { Pet } from "./pet.model";

export class PetList {
    count: number;
    results: Pet[];

    constructor(obj?:any) {
        this.count = obj && obj.count || 0;
        this.results = obj && obj.results && obj.results.map((x:any) => new Pet(x)) || [];
    }
}