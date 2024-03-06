import { Component, Input } from '@angular/core';
import { NumberService } from '../../../services/number.service';

@Component({
  selector: 'name-display',
  templateUrl: './name-display.component.html',
  styleUrl: './name-display.component.scss'
})
export class NameDisplayComponent {
  @Input() name: string = '';
   
  constructor(public numbers: NumberService) {
    
  }

  getStrChars(str: string) {
    let arr: string[] = [];

    str.split('').forEach(char => {
      arr.push(char);
    });

    return arr
  }
}
