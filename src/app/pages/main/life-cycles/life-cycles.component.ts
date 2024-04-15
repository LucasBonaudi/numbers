import { Component, Input } from '@angular/core';
import { PersonalNumbers } from '../../../models/personal-numbers';

@Component({
  selector: 'life-cycles',
  templateUrl: './life-cycles.component.html',
  styleUrl: './life-cycles.component.scss'
})
export class LifeCiclesComponent {
  @Input() numbers?: PersonalNumbers; 

  firstCycle?: number;

  value1?: number;  
  value2?: number;

  ngOnChanges(): void {
    this.firstCycle = 36 - (this.numbers?.lv.reducedValue ?? 0);
    this.value1 = PersonalNumbers.sumDigits((this.numbers?.birthDate?.getMonth() ?? 0) + 1);  
    this.value2 = PersonalNumbers.sumDigits(this.numbers?.birthDate?.getDate() ?? 0);  
  }
}
