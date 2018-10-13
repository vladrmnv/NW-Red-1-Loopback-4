import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { RouterModule } from '@angular/router';
import { UserControllerService } from 'sdk/controllers/UserController';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, RouterModule, HttpClientModule, ReactiveFormsModule],
  declarations: [UsersComponent],
  providers: [UserControllerService],
  exports: [UsersComponent],
})
export class UsersModule {}
