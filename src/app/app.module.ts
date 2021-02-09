import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Modules
import { AppRoutingModule } from './app-routing.module';
import { CandidatesModule } from './components/candidates.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CandidatesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
