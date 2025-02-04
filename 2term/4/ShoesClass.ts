import { Thing } from './ThingClass';
import { IParams } from './IParamsInterface'

export class Shoes extends Thing implements IParams{
    private soleType:string;

    constructor(type: string, id: number, size: number, color: string, 
        prise: number, seasone: [string,number], material: string, 
        thingsex:string, discount:number ,soleType:string) {
        super(type, id, size, color, prise, seasone , material, thingsex, discount);
        this.soleType = soleType;
    }

    public get SoleType():string{
        return this.soleType;
    }

    public set Soletype(value:string){
        this.soleType = value;
    }

    public toString(): string{
        let outputShoe:string = "";
        outputShoe += `Тип обуви: ${this.Type}\n
                       Сезон: ${this.Seasone[0]}, ${this.Seasone[1]}\n
                       Пол: ${this.Thingsex}\n
                       Уникальный идентификатор: ${this.Id}\n
                       Размер обуви: ${this.Size}\n
                       Тип подошвы: ${this.SoleType}\n
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

    public current(){

    }

}