import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'date-picker',
  templateUrl: './date-picker.component.html',
  styleUrl: './date-picker.component.scss'
})
export class DatePickerComponent {
  @Output() dateValueChange: EventEmitter<any> = new EventEmitter<any>();

  pickerEvent($event: any) {
    this.dateValueChange.emit($event)
  }
}
