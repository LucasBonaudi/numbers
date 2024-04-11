import { Component } from '@angular/core';
import { NumerologyName } from '../../models/numerology-name';
import { PersonalNumbers } from '../../models/personal-numbers';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
  
  defaultDate: Date = new Date(1990, 3, 3)
  defaultName: string = 'Lucas Bonaudi'

  personalNumbers: PersonalNumbers = new PersonalNumbers(this.defaultDate, this.defaultName);

  constructor() {

  }

  onNameChange($name: string) {
    //this.personalNumbers.name = this.name
  }

  onDateChange($event: any) {
    this.personalNumbers.birthDate = $event.value._d
  }
}
