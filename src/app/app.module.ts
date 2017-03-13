import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

//Directive Stuff
import { CustomDirective } from './customDirective';


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        
    ],
    declarations: [
        AppComponent,
        CustomDirective
    ],
    bootstrap: [AppComponent]

})
export class AppModule {
}