import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from "@angular/forms";
import { AppComponent } from './app.component';
import { TemplateComponent } from './template/template.component';
import { TypescriptComponent } from './typescript/typescript.component';
import { ValidatorsComponent } from './validator/validators.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateComponent,
    TypescriptComponent,
    ValidatorsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
