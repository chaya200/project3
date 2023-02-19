import { Component } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';
import { ClientModel } from 'src/app/models/client.model';
import { FormControl, FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

export function passwordMatchValidator(control: AbstractControl) {
  const password = control.get('password').value;
  const confirmPassword = control.get('confirmPassword').value;

  return password === confirmPassword ? null : { passwordMatch: true };
}


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  public newClient = new ClientModel();

  public RegisterForm = new FormGroup({
    first_name: new FormControl('', [Validators.required, Validators.maxLength(15)]),
    last_name: new FormControl('', [Validators.required, Validators.minLength(15)]),
    id_num: new FormControl('', [Validators.required, Validators.minLength(9)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.maxLength(8), Validators.minLength(8)]),
    confirmPassword: new FormControl('', [Validators.required, Validators.maxLength(8), Validators.minLength(8)]),
    city: new FormControl('', Validators.required),
    street: new FormControl('', Validators.required)
  }, { validators: passwordMatchValidator });

  constructor(private loginService: LoginService,  private router: Router ) {}




  public async Register() {
    //check if the two passwords are match
    //  if(this.newClient.password==)
    console.log(this.newClient);
    if (this.RegisterForm.invalid) {
      this.RegisterForm.markAllAsTouched();
      return;
    }

      try {
        console.log(this.newClient);
        await this.loginService.register(this.newClient);
        alert("welcome!");
        this.router.navigateByUrl("/products");
      }
      catch (err:any) {
        console.log(err);
      }
    }

  }

