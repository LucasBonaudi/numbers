import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NumberService {
  letterValues:any = {
    'A': 1, 'B': 2, 'C': 3, 'D': 4, 'E': 5, 'F': 6, 'G': 7, 'H': 8, 'I': 9,
    'J': 1, 'K': 2, 'L': 3, 'M': 4, 'N': 5, 'Ñ': 5, 'O': 6, 'P': 7,
    'Q': 8, 'R': 9, 'S': 1, 'T': 2, 'U': 3, 'V': 4, 'W': 5, 'X': 6,
    'Y': 7, 'Z': 8
  };

  vowels = ['A', 'E', 'I', 'O', 'U'];

  isConsonant(letter:string) {
    const upperCaseLetter = letter.toUpperCase(); 

    return this.vowels.includes(upperCaseLetter); 
  }

  getLetterValue(letter:string) {
    const upperCaseLetter = letter.toUpperCase(); 
    
    return this.letterValues[upperCaseLetter]
  }

  constructor() { }
}
