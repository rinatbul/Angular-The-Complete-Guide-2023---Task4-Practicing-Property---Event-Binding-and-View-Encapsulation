import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  inputValue:string;
  oddNumbers: number[] = []
  evenNumbers: number[] = []

  handleEvent(data:number):void{
    if (data % 2 === 0){
      this.evenNumbers.push(data)
    } else {
      this.oddNumbers.push(data)
    }
  }

}
