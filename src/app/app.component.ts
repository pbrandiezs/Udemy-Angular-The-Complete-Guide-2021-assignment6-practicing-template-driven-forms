import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') signupForm: NgForm;
  subscriptionOption: string = "Advanced";

// suggestSubscription() {
//   this.signupForm.form.patchValue(this.subscriptionOption: pro)
// }

  onSubmit() {
    console.log("Form Submitted!");
    console.log(this.signupForm);
  }

  // onInit() {
  //   this.suggestSubscription();
  // }

}
