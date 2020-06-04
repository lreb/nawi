import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiRestService } from 'src/app/shared/services/api-rest.service';
import { User } from 'src/app/models/classes/User';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-users-edit',
  templateUrl: './users-edit.component.html',
  styleUrls: ['./users-edit.component.css']
})
export class UsersEditComponent implements OnInit {

  user: User = {} as User;
  constructor(
    private route: ActivatedRoute,
    private api: ApiRestService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    if (id > 0) {
      this.getUser(id);
    }
  }

  saveUser(): void {
    console.log(this.user.userId);
    if (this.user.userId === undefined) {
      this.createtUser();
    } else {
      this.updateUser();
    }
  }

  getUser(id: number): void{
    this.api.get(environment.apis.netCoreAPI.host, '', `user/${id}`).subscribe(
      (data: User) => this.user = data,
      (err: any) => console.log(err)
    );
  }

  createtUser(){
    this.api.post(environment.apis.netCoreAPI.host, '', 'user', this.user).subscribe(
    (data: User) => {
      console.log('redirect to info');
      this.redirectToUserInfo(data.userId);
    },
    (err: any) => console.log(err));
  }

  updateUser(){
    this.api.put(environment.apis.netCoreAPI.host, '', 'user', this.user).subscribe(
    (data: User) => {
      console.log('redirect to info');
      this.redirectToUserInfo(data.userId);
    },
    (err: any) => console.log(err));
  }

  redirectToUserInfo(id: number): void{
    this.router.navigate(['users', id, 'view']);
  }

}
