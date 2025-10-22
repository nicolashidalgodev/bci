import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MyDialogComponent } from './components/dialogo.component'
import { ContactsService } from './services/contacts.service';

import { MaterialModule  } from './material.module';

@NgModule({
  declarations: [
    AppComponent,
    MyDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule
  ],
  entryComponents: [
    MyDialogComponent
  ],
  providers: [ ContactsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
