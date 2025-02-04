export abstract class Thing{
    private type:string;
    private readonly id:number;
    private size:number;
    private color:string;
    private prise:number;
    private seasone:[string,number];
    private material: string;
    private thingsex:string;

    private discount:number;
    private finalPrise:number;

    public get FinalPrise(){
        return this.finalPrise;
    }

    public get Discount(){
        return this.discount;
    }

    public set Discount(value:number){
        this.discount = value;
        this.finalPrise = this.prise * this.discount;
    }

    public get Type(): string {
        return this.type;
    }

    public set Type(value: string) {
        this.type = value;
    }

    public get Id(): number {
        return this.id;
    }

    public get Size(): number {
        return this.size;
    }

    public set Size(value: number) {
        this.size = value;
    }

    public get Color(): string {
        return this.color;
    }

    public set Color(value: string) {
        this.color = value;
    }

    public get Prise(): number {
        return this.prise;
    }

    public set Prise(value: number) {
        this.prise = value;
        this.finalPrise = this.prise*this.discount;
    }

    public get Seasone(): [string,number] {
        return this.seasone;
    }

    public set Seasone(value: [string,number]) {
        this.seasone = value;
    }

    public get Material(): string {
        return this.material;
    }

    public set Material(value: string) {
        this.material = value;
    }

    public get Thingsex(): string {
        return this.thingsex;
    }

    public set Thingsex(value: string) {
        this.thingsex = value;
    }
    

    constructor(type: string, id: number, size: number, color: string, prise: number, 
        seasone: [string,number], material: string, thingsex:string, discount:number){
        this.type = type;
        this.id = id;
        this.size = size;
        this.color = color;
        this.prise = prise;
        this.seasone = seasone;
        this.material = material;
        this.thingsex = thingsex;
        this.discount = discount;
        this.finalPrise = prise*discount;
    }

    public toString(): string{
        let outputShoe:string = "";
        outputShoe += `Тип вещи: ${this.Type}\n
                       Сезон: ${this.Seasone[0]}, ${this.Seasone[1]}\n
                       Пол: ${this.Thingsex}\n
                       Уникальный идентификатор: ${this.Id}\n
                       Размер вещи: ${this.Size}\n
                       Тип материала: ${this.Material}\n
                       Цвет: ${this.Color}\n
                       Цена: ${this.Prise}\n`;
        return outputShoe;
    }

    static filterByPrice(things: Thing[], minPrice: number, maxPrice: number): Thing[] {
        return things.filter(thing => thing.prise >= minPrice && thing.prise <= maxPrice);
    }

    static filterBySize(things: Thing[], size: number): Thing[] {
        return things.filter(thing => thing.size === size);
    }

    static filterByColor(things: Thing[], color: string): Thing[] {
        return things.filter(thing => thing.color === color);
    }
}