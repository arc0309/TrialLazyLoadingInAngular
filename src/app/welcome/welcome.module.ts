import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomehomeComponent } from './welcomehome/welcomehome.component';

const routes: Routes = [
  {path: '', component: WelcomehomeComponent}
];
@NgModule({
  declarations: [WelcomehomeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class WelcomeModule { }
