import { Component,OnInit, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { User } from '../user';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent implements OnInit {
 user = new User(1, '', '');
 error: boolean = false;
 users: any;
 errorMessage: string = '';
 found: boolean = false;

ngOnInit() {
  this.getAllUsers();
}

 onSubmit() { 
   console.log(this.user)
   const found = this.users.find((user:any) => {
   return user.name === this.user.name && user.password === this.user.password ;
});

if(found) this.found = true;
else this.error = true;  this.errorMessage = 'Error: user name or password wrong.';
  }

 getAllUsers() {
  setTimeout(() => {
      this.users =  [
        { name: "Michael", password:"test" },
        { name: "Sarah", password:"test"},
        { name: "Bill",  password:"test"},
        { name: "MAINT", password:"safetyiskey"}
      ]
       console.log(this.users)
  },100, 600)
 }
}
