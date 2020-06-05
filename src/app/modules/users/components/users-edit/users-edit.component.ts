import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiRestService } from 'src/app/shared/services/api-rest.service';
import { User } from 'src/app/models/classes/User';
import { environment } from 'src/environments/environment';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-users-edit',
  templateUrl: './users-edit.component.html',
  styleUrls: ['./users-edit.component.css']
})
export class UsersEditComponent implements OnInit {

  userForm: FormGroup
  user = new User();
  // user: User = {} as User;
  constructor(
    private route: ActivatedRoute,
    private api: ApiRestService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.userForm = new FormGroup({
      userId: new FormControl(),
      name: new FormControl(),
      userName: new FormControl(),
      password: new FormControl()
    });
    const id = +this.route.snapshot.paramMap.get('id');
    if (id > 0) {
      this.getUser(id);
    }
  }

  fillForm(user: User): void {
    this.userForm.setValue({
      userId: user.userId,
      name: user.name,
      userName: user.userName,
      password: user.password
    });
  }

  saveUser(): void {
    if ( this.userForm.valid) {
      const user = {...this.user, ...this.userForm.value };
      console.log(user)
      if (user.userId === null) {
        user.userId = 0;
        this.createtUser(user);
      } else {
        this.updateUser(user);
      }
    }
  }

  getUser(id: number): void{
    this.api.get(environment.apis.netCoreAPI.host, '', `user/${id}`).subscribe(
      (data: User) => {
        this.user = data
        this.fillForm(data);
      },
      (err: any) => console.log(err)
    );
  }

  createtUser(user){
    this.api.post(environment.apis.netCoreAPI.host, '', 'user', user).subscribe(
    (data: User) => {
      console.log('redirect to info');
      this.redirectToUserInfo(data.userId);
    },
    (err: any) => console.log(err));
  }

  updateUser(user){
    this.api.put(environment.apis.netCoreAPI.host, '', 'user', user).subscribe(
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
