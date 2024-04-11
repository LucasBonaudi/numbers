export class NumerologyValue {
    value: number = 0;
    reducedValue: number = 0;

    public get display(): string {
        return this.value + '/' + this.reducedValue;
    }

    constructor(value: number = 0) {
        if (value) {
            const reducedValues = NumerologyValue.reduce(value)

            this.value = reducedValues[0]
            this.reducedValue = reducedValues[1]
        }
    }

    private static reduce(value: number): number[] {
        let reduced = value

        if (value <= 78) {
            reduced = this.reduceToOne(value)
        } else if(value < 100) {
            return this.reduce(this.sumDigits(value))
        } else {
            const twoFirstDigits = Math.floor(value / 10);
            const lastDigit = value % 10;

            const newValue = twoFirstDigits + lastDigit;

            return this.reduce(newValue)
        }

        return [ value, reduced ]
    }

    private static reduceToOne(value: number) : number {
        return value <= 9 ? value : this.reduceToOne(this.sumDigits(value));
    }

    private static sumDigits(n: number) : number {
        return n.toString().split('').reduce((sum, d) =>  sum + parseInt(d), 0)
    }
}
