import { Component, OnInit } from '@angular/core';
import { UserControllerService } from 'sdk/controllers/UserController';
import { Subscription } from 'rxjs';

import { NwUser } from 'sdk/model';
// import { NwUser } from '@nw/demo-server/src/models';

@Component({
  selector: 'nw-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  constructor(public userService: UserControllerService) {
    this.initNewUser();
  }

  public users: NwUser[];
  public newUser: NwUser;
  ngOnInit() {
    this.find();
  }

  find(): Subscription {
    return this.userService.find({}).subscribe(users => {
      this.users = users;
    });
  }

  create(user: NwUser) {
    this.userService
      .create({
        body: user,
      })
      .subscribe(createdUser => {
        console.log(createdUser);
        this.initNewUser();
      });
  }

  private initNewUser() {
    this.newUser = {
      email: '',
      firstName: '',
      password: '',
    };
  }
}
