import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { User } from '../user';
import { FormGroup, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent implements OnInit {
  user = new User(1, '', '');
  error: boolean = false;
  errorMessage: string = '';
  found: boolean = false;
  loginBtnDisbaled: boolean = false;

  ngOnInit() { }

  onSubmit() {
    this.loginBtnDisbaled = true;
    let randomInterval = Math.floor(Math.random() * (600 - 100 + 1)) + 100;
    setTimeout(() => {
      this.loginBtnDisbaled = false;
      if (this.user.name === 'MAINT' && this.user.password === 'safetyiskey') this.found = true;
      else this.error = true; this.errorMessage = 'Error: user name or password wrong.'
    }, randomInterval);
  }

}
