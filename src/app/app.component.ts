import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isDisabled = false;

  changeStatus(){
    this.isDisabled = !this.isDisabled;
  }

  title = 'dynamic-button-event-binding';
}
