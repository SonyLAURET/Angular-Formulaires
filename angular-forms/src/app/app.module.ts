import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from "@angular/forms";
import { AppComponent } from './app.component';
import { TemplateComponent } from './template/template.component';
import { TypescriptComponent } from './typescript/typescript.component';
import { ValidatorsComponent } from './validator/validators.component';
import { CombineComponent } from './combine/combine.component';
import { StyleComponent } from './style/style.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateComponent,
    TypescriptComponent,
    ValidatorsComponent,
    CombineComponent,
    StyleComponent
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
