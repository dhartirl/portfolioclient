import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [ UserService ]
})
export class LoginComponent implements OnInit {
  
  username: string;
  password: string;
  errorText: string;
  loginInProgress: boolean;

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {

  }

  tryLogin(): void {
    this.errorText = "";
    this.loginInProgress = true;
    this.userService.login(this.username, this.password).subscribe(res => {
      console.log(res);
      console.log(this.userService.currentUser);
      if(res.success) {
        window.location.href = window.location.origin;
      } else {
        this.errorText = res.err;
        this.loginInProgress = false;
      }
    });
  }

}
