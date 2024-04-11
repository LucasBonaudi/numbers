import { Component, Input } from '@angular/core';
import { NumerologyName } from '../../../models/numerology-name';

@Component({
  selector: 'name-display',
  templateUrl: './name-display.component.html',
  styleUrl: './name-display.component.scss'
})
export class NameDisplayComponent {
  @Input() name: NumerologyName = new NumerologyName('');

  constructor() {
    
  }
}
