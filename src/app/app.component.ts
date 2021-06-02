import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f', { static: false }) signupForm: NgForm;
  subscriptionOption = "Advanced";
  submitted = false;
  formValues = {
    email: '',
    subscription: '',
    password: ''
  };

  onSubmit() {
    // console.log(this.signupForm);
    this.submitted = true;
    console.log("Email: " + this.signupForm.value.email);
    console.log("Subscription: " + this.signupForm.value.subscription);
    console.log("Password: " + this.signupForm.value.password);
    this.formValues.email = this.signupForm.value.email;
    this.formValues.subscription = this.signupForm.value.subscription;
    this.formValues.password = this.signupForm.value.password;

    this.signupForm.reset();
  }
}
