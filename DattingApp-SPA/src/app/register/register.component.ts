import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Input() ValuesFromHome: any;
  @Output() CancelRegister = new EventEmitter();
model: any = {};

  constructor(private authService: AuthService) {}

  ngOnInit() {
  }

  register() {
   console.log(this.model.username);
  }

  cancel() {
    this.CancelRegister.emit(false);
    console.log(this.model.password);
  }
}
