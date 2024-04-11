import { Component, Input } from '@angular/core';
import { PersonalNumbers } from '../../../models/personal-numbers';

@Component({
  selector: 'main-numbers',
  templateUrl: './main-numbers.component.html',
  styleUrl: './main-numbers.component.scss'
})
export class MainNumbersComponent {
  @Input() numbers?: PersonalNumbers;
}
