import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }   from './app.component';
import { RemedyListComponent } from './remedy-list.component';
import { EditRemedyComponent } from './edit-remedy.component';
import { NewRemedyComponent } from './new-remedy.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    RemedyListComponent,
    EditRemedyComponent,
    NewRemedyComponent,
  ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
