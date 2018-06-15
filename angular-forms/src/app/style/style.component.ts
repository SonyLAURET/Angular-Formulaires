import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { User } from "../model/user";
import { isPrefixNartawakValidator } from "../validator/password.validator";

@Component({
  selector: 'app-style',
  templateUrl: './style.component.html',
  styleUrls: ['./style.component.css']
})
export class StyleComponent implements OnInit {
  emailCtrl: FormControl;
  passwordCtrl: FormControl;
  userForm: FormGroup;
  user: User = new User('Nartawak', 'test');
  constructor(fb: FormBuilder) {
    
    // Création des contrôles
    this.emailCtrl = fb.control('', [Validators.email, Validators.required]);
    this.passwordCtrl = fb.control('', [isPrefixNartawakValidator]);
    this.userForm = fb.group({
      email: this.emailCtrl,
      password: this.passwordCtrl
    });
  }
  handleClear() {
    this.user.email = '';
    this.user.password = '';
  }
  handleSubmit() {
    console.log(this.user);
  }
  ngOnInit() {
  }
}
