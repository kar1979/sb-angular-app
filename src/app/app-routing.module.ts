import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CandidatesComponent } from './views/candidates/candidates.component';

const routes: Routes = [
  {
    path: '',
    component: CandidatesComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
