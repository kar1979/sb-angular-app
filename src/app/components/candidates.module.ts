import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Angular Material
import {MatToolbarModule} from '@angular/material/toolbar';
// Components
import { CandidatesComponent } from '../views/candidates/candidates.component';
import { HeaderComponent } from './candidates/header/header.component';

@NgModule({
  declarations: [
    CandidatesComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule
  ]
})
export class CandidatesModule { }
