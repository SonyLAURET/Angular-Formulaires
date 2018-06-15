import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";
@Component({
  selector: 'app-typescript',
  templateUrl: './typescript.component.html',
  styleUrls: ['./typescript.component.css']
})
export class TypescriptComponent implements OnInit {
  emailCtrl: FormControl;
  passwordCtrl: FormControl;
  userForm: FormGroup;
  constructor(fb: FormBuilder) {
    
    // Création des contrôles
    this.emailCtrl = fb.control('');
    this.passwordCtrl = fb.control('');
    
    // Création du groupe (aka le formulaire)
    this.userForm = fb.group({
      email: this.emailCtrl,
      password: this.passwordCtrl
    });
  }
  handleClear() {
    this.emailCtrl.setValue('');
    this.passwordCtrl.setValue('');
  }
  handleSubmit() {
    console.log(this.userForm.value);
  }
  ngOnInit() {
  }
}
