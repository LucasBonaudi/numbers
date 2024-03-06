import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
  name: string = 'Lucas Bonaudi'; 

  onDateChange($event: any) {
    console.log($event)
  }
}
