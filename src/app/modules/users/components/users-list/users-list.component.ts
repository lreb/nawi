import { Component, OnInit } from '@angular/core';
import { ApiRestService } from 'src/app/shared/services/api-rest.service';
import { environment } from 'src/environments/environment';
import { User } from 'src/app/models/classes/User';
import { ActivatedRoute } from '@angular/router';
import { ServiceResult } from 'src/app/models/classes/TrackerError';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  users: User[];
  constructor(
    private api: ApiRestService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const resolverUsers: User[] | ServiceResult = this.route.snapshot.data['resolvedUser']; // | Users
    if (resolverUsers instanceof ServiceResult) {
      console.log(`message: ${resolverUsers}`)
    } else {
      this.users = resolverUsers;
    }

    // this.getUsers();
  }

  getUsers(): void {
    this.api.get(environment.apis.netCoreAPI.host, '', 'user'). subscribe(
      (data: User[]) => {
        this.users = data;
      },
      (err: any) => console.log(err),
      () => console.log('done users')
    );
  }

  deleteUsers(id: number): void {
    this.api.delete(environment.apis.netCoreAPI.host, '', `user/${id}`). subscribe(
      (data: User[]) => {
        this.getUsers();
      },
      (err: any) => console.log(err),
      () => console.log('deleted user')
    );
  }
}
