import { Thing } from './ThingClass';
import { IParams } from './IParamsInterface'

export class Shirts extends Thing implements IParams{
    private sleeveLength:number;
    private neckline:string;
    private pattern:string;

    public get SleeveLength(): number {
        return this.sleeveLength;
    }
    public set SleeveLength(value: number) {
        this.sleeveLength = value;
    }

    public get Neckline(): string {
        return this.neckline;
    }
    public set Neckline(value: string) {
        this.neckline = value;
    }

    public get Pattern(): string {
        return this.pattern;
    }
    public set Pattern(value: string) {
        this.pattern = value;
    }

    constructor(type: string, id: number, size: number, color: string, 
        prise: number, seasone: [string,number], material: string, 
        thingsex:string, discount:number , sleeveLength:number, neckline:string, pattern:string) {
        super(type, id, size, color, prise, seasone ,material, thingsex, discount);
        this.sleeveLength = sleeveLength;
        this.neckline = neckline;
        this.pattern = pattern;
    }

    public toString(): string{
        let outputShoe:string = "";
        outputShoe += `Тип майки: ${this.Type}\n
                       Сезон: ${this.Seasone[0]}, ${this.Seasone[1]}\n
                       Пол: ${this.Thingsex}\n
                       Уникальный идентификатор: ${this.Id}\n
                       Размер майки: ${this.Size}\n
                       Длина рукава: ${this.SleeveLength}\n
                       Тип выреза: ${this.Neckline}\n
                       Принт: ${this.Pattern}\n
                       Тип материала: ${this.Material}\n
                       Цвет: ${this.Color}\n
                       Цена: ${this.Prise}\n
                       Скидка: ${this.Discount}\n
                       Конечная цена: ${this.FinalPrise}\n`;
        return outputShoe;
    }
    
    public updatePrise(newPrise:number):number{
        return this.Prise = newPrise;
    }
}