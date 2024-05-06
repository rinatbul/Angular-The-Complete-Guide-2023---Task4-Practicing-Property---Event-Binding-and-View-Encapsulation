import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrl: './game-control.component.css'
})
export class GameControlComponent {
  inputValue:any = 0
  intervalId
  @Output() inputValueCreated:EventEmitter<any> = new EventEmitter()

  onStartClick():void{
    this.intervalId=setInterval(()=>{
      this.inputValue++
      this.inputValueCreated.emit(this.inputValue)
      console.log(this.inputValue)
    },1000)


  }
  onStopClick(){
    clearInterval(this.intervalId)
  }
}
