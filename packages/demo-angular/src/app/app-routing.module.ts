import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './components/users/users.component';
import { UsersModule } from './components/users/users.module';

const routes: Routes = [
  {
    path: '',
    component: UsersComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), UsersModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
