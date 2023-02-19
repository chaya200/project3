
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
// import { ClientModel } from 'src/models/client.model';
import { Router } from '@angular/router';
import { ClientModel } from 'src/app/models/client.model';
import { LoginService } from 'src/app/services/login.service';

// import * as bcrypt from 'bcryptjs';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public existsClient = new ClientModel();
  //RegisterComponent: any;

  public clientName : string="hi";

    public myForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)])
    });
  constructor(private loginService: LoginService,  private router: Router ) {}

  public async send() {
    this.existsClient.email = this.myForm.get('email').value;
    this.existsClient.password=this.myForm.get('password').value;

    try {
      // const saltRounds = 10;
      // const hashedPassword = bcrypt.hashSync(this.existsClient.password, saltRounds);
      console.log(this.existsClient);
      const isClient = await this.loginService.login(this.existsClient);
      console.log(isClient);

      switch(isClient.role){
        case 0:
          alert("Did you signed before?/ or one of your failed wrong ");
          break;

        case 1:
          alert(`welcome admin ${isClient.first_name}`);
          this.router.navigate(['admin']);
          break;

        case 2:
          alert(`welcome back ${isClient.first_name}! enjoy shopping`);
          this.router.navigate(['/products']);
          break;
      }
    } catch (err:any) {
      alert(err.message);
    }
  }

}
