export class Visitor {

    constructor(
    public id: number,
    public name: string,
    public typeOfVisit: string,
    public dateLogin: Date, //JAVASCRIPT MONTHS START WITH 0!!!!
    public company?: string,
    public licensePlate?: string, 
    ){}
}
