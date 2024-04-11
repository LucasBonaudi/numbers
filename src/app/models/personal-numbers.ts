import moment from "moment";
import { NumerologyValue } from "./numerology-value";
import { NumerologyLetter, NumerologyName } from "./numerology-name";

export class PersonalNumbers {
    private _birthDate?: Date = undefined;
    private _name: NumerologyName = new NumerologyName('');

    public set name(value: string) {
        this._name.name = value;

        let pe = 0;
        let nal = 0;
        this._name.charValuesName.forEach(char => {
            if (char.isVowel)
                nal += char.value?.reducedValue ?? 0;
            else 
                pe += char.value?.reducedValue ?? 0;
        })

        this.pe = new NumerologyValue(pe);
        this.nal = new NumerologyValue(nal);
        this.vd = new NumerologyValue(this.nal.value + this.pe.value);

        this.updateNF()
    }

    get name(): NumerologyName {
        return this._name;
    }

    get birthDate(): Date | undefined {
        return this._birthDate;
    }

    public set birthDate(value: any) {
        if (value._i) {
            this._birthDate = new Date(value._i.year, value._i.month, value._i.date);

            this.so = PersonalNumbers.calculateSO(this._birthDate);

            const reducedDate = PersonalNumbers.reduceDate(this._birthDate);

            this.lv = new NumerologyValue(reducedDate)

            this.updateNF()
        }
    }

    updateNF() {
        if(this._birthDate && this._name)
            this.nf = new NumerologyValue(this.vd.value + this.lv.value);
    }

    lv: NumerologyValue = new NumerologyValue();
    pe: NumerologyValue = new NumerologyValue();
    nal: NumerologyValue = new NumerologyValue();
    vd: NumerologyValue = new NumerologyValue();
    nf: NumerologyValue = new NumerologyValue();
    so: NumerologyValue = new NumerologyValue();

    constructor (birthDate?: Date, name?:string) {
        if (birthDate) 
            this.birthDate = { "_i": { "year": birthDate.getFullYear(), "month": birthDate.getMonth(), "date": birthDate.getMonth() } };
        
        if(name) 
            this.name = name;
    }

    private static reduceDate(date: Date) :number {
        let value = date.getDate() + date.getMonth() + 1;

        const year = date.getFullYear();

        if (year < 2000) {
            value += this.sumDigits(year)
        } else {
            const twoFirstDigits = Math.floor(value / 100);
            const lastTwoDigit = value % 100;

            value += twoFirstDigits + this.sumDigits(lastTwoDigit);
        }

        return value
    }

    private static sumDigits(n: number) : number {
        return n.toString().split('').reduce((sum, d) =>  sum + parseInt(d), 0)
    }

    private static calculateSO(birthDate:Date): NumerologyValue {
        const a = new NumerologyValue(birthDate.getMonth() + 1)
        const b = new NumerologyValue(birthDate.getDate())
        const c = new NumerologyValue(birthDate.getFullYear())

        

        const d = new NumerologyValue(a.reducedValue + b.reducedValue + c.reducedValue)

        const k = new NumerologyValue(Math.abs(a.reducedValue - b.reducedValue))
        const l = new NumerologyValue(Math.abs(b.reducedValue - c.reducedValue))
        const m = new NumerologyValue(Math.abs(k.reducedValue - l.reducedValue))
        const o = new NumerologyValue(k.reducedValue + l.reducedValue + m.reducedValue)
        const p = new NumerologyValue(d.reducedValue + o.reducedValue)

        console.log("A", a)
        console.log("B", b)
        console.log("C", c)
        console.log("D", d)
        console.log("K", k)
        console.log("L", l)
        console.log("M", m)
        console.log("O", o)
        console.log("P", p)

        return p
    }
}

