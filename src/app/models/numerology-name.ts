import { NumerologyValue } from "./numerology-value";

const letterValues: { [key: string]: number } = {
    'A': 1, 'B': 2, 'C': 3, 'D': 4, 'E': 5, 'F': 6, 'G': 7, 'H': 8, 'I': 9,
    'J': 10, 'K': 11, 'L': 12, 'M': 13, 'N': 14, 'Ñ': 14, 'O': 15, 'P': 16,
    'Q': 17, 'R': 18, 'S': 19, 'T': 20, 'U': 21, 'V': 22, 'W': 23, 'X': 24,
    'Y': 25, 'Z': 26
};

const vowels = ['A', 'E', 'I', 'O', 'U'];

export class NumerologyName {
    private _name: string = '';
    public charValuesName: NumerologyLetter[] = [];

    public set name(value: string) {
        this._name = value;
        this.charValuesName = [];
        value.split('').forEach(char => {
            this.charValuesName.push(
                new NumerologyLetter(char)
            )
        });
    }

    get name(): string {
        return this._name;
    }

    constructor(name: string) {
        this.name = name;
    }

    toString(): string {
        return this.name;
    }
}

export class NumerologyLetter {
    letter: string;
    value?: NumerologyValue;
    isVowel: boolean;

    constructor (letter: string) {
        if (letter && letter.length > 1) {
            letter = letter[0]
        }

        const upperCaseLetter = letter.toUpperCase(); 

        this.letter = letter;

        if (letterValues.hasOwnProperty(upperCaseLetter))
            this.value = new NumerologyValue(letterValues[upperCaseLetter]);
        
        
        this.isVowel = vowels.includes(upperCaseLetter); 
    }
}
