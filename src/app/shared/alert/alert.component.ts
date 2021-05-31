import {EventEmitter} from '@angular/core';
import {Component, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent {
  @Input() message: string;
  @Output() closeErrorMessage = new EventEmitter<void>();


  onClose() {
    this.closeErrorMessage.emit();
  }

  constructor() {
  }

}
