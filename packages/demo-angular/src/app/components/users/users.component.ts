import { Component, OnInit } from '@angular/core';
import { UserControllerService } from 'sdk/controllers/UserController';
import { NwUser } from 'sdk/model';
import { Observable } from 'rxjs';

@Component({
  selector: 'nw-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  constructor(private userService: UserControllerService) {}

  users: NwUser[];
  ngOnInit() {
    this.find();
  }

  find(): Observable<NwUser[]> {
    return this.userService.find({}).subscribe(users => {
      this.users = users;
    });
  }
}
