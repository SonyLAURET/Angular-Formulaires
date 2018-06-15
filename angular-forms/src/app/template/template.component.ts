import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {
  user: User = new User('Nartawak', 'test');
  constructor() { }

  ngOnInit() {
  }
  handleSubmit(value) {
    console.log('SUBMIT', this.user);
  }

}
