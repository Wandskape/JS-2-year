import { Thing } from './ThingClass';
import { IParams } from './IParamsInterface'

export class Pants extends Thing implements IParams{
    private length:number;
    private fit:string;
    private waisSize:number;

    public get Length(): number {
        return this.length;
    }
    public set Length(value: number) {
        this.length = value;
    }

    public get Fit(): string {
        return this.fit;
    }
    public set Fit(value: string) {
        this.fit = value;
    }

    public get WaisSize(): number {
        return this.waisSize;
    }
    public set WaisSize(value: number) {
        this.waisSize = value;
    }

    constructor(type: string, id: number, size: number, color: string, 
        prise: number, seasone: [string,number], material: string, 
        thingsex:string, discount:number ,length:number, fit:string, waisSize:number) {
        super(type, id, size, color, prise, seasone ,material, thingsex, discount);
        this.length = length;
        this.fit = fit;
        this.waisSize = waisSize;
    }

    public toString(): string{
        let outputShoe:string = "";
        outputShoe += `Тип штанов: ${this.Type}\n
                       Сезон: ${this.Seasone[0]}, ${this.Seasone[1]}\n
                       Пол: ${this.Thingsex}\n
                       Уникальный идентификатор: ${this.Id}\n
                       Размер штанов: ${this.Size}\n
                       Длина штанов: ${this.Length}\n
                       Посадка штанов: ${this.Fit}\n
                       Размер талии: ${this.WaisSize}\n
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