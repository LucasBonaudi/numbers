import { Component, Input } from '@angular/core';
import { NumerologyLetter, NumerologyName } from '../../../models/numerology-name';

@Component({
  selector: 'life-balance',
  templateUrl: './life-balance.component.html',
  styleUrl: './life-balance.component.scss'
})
export class LifeBalanceComponent {
  @Input() name: NumerologyName = new NumerologyName('');
  
  getNumberCount(number: number) : number {
    let count = 0;
    this.name.charValuesName.forEach((char: NumerologyLetter) => {
        if (char.value?.reducedValue === number) {
            count++;
        }
    });
    return count;
  }

  getBalanceClass(number: number) : string {
    if (number >= 0 && number <= 2) {
      return 'deficieny';
    } else if (number >= 3 && number < 4) {
      return 'balanced';
    } else {
      return 'excess';
    }
  }
}
