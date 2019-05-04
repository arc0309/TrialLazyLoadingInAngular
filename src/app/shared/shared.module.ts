import { HttpClientModule } from '@angular/common/http';
import { UsersService } from './users.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [HttpClientModule],
  providers: [UsersService]
})
export class SharedModule { }
