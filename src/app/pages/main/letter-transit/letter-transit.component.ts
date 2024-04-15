import { Component, Input } from '@angular/core';
import { NumerologyName } from '../../../models/numerology-name';
import { ContentObserver } from '@angular/cdk/observers';

@Component({
  selector: 'letter-transit',
  templateUrl: './letter-transit.component.html',
  styleUrl: './letter-transit.component.scss'
})
export class LetterTransitComponent {
  @Input() name: NumerologyName = new NumerologyName('');


  getYearFrom(index: number): number {
    index = Math.min(index, this.name.charValuesName.length - 1);

    console.log(index)

    let value: number = this.name.charValuesName
      .slice(0, index)
      .filter(item => item.letter !== ' ' && item.value !== undefined)
      .reduce((acc, curr) => acc + curr.value!.reducedValue, 0);

    return value;
  }
}
