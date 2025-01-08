import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  username= "";
  password= "";
  errorMsg = "";

  login(){
    if ( this.username.trim().length === 0) {
      this.errorMsg = "Username is required";
    } else if (this.password.trim().length === 0) {
      this.errorMsg = "Password is required";
    }else{
      this.errorMsg = "";
      // Perform login logic here
    }
  }
}
