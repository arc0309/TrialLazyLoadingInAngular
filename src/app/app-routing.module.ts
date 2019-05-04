import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', 
          children: [{path: '', redirectTo: 'welcomeuser', pathMatch: 'full'},
                    {path: 'welcomeuser', loadChildren: './welcome/welcome.module#WelcomeModule'}
          ]},
  {path: 'users', loadChildren: './user/user.module#UserModule'},
  {path: 'products', loadChildren: './product/product.module#ProductModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
