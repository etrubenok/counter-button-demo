import { 
  Component,
  OnInit,
  Input
} from '@angular/core';

@Component({
  selector: 'counter-button',
  templateUrl: './counter-button.component.html',
  styleUrls: ['./counter-button.component.css']
})
export class CounterButtonComponent implements OnInit {
  counter: number = 0;
  showAlert: boolean = false;

  constructor() {
  }

  ngOnInit() {
  }

  onClickMe() {
    this.counter++;
    this.showAlert = !this.showAlert;
  }

  onCloseAlert() {
    this.showAlert = false;
  }
}
