import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiRestService } from 'src/app/shared/services/api-rest.service';
import { User } from 'src/app/models/classes/User';
import { environment } from 'src/environments/environment';
import { FormGroup, FormControl, FormBuilder, Validator, Validators, AbstractControl, ValidatorFn } from '@angular/forms';
import { faBaby } from '@fortawesome/free-solid-svg-icons';
import { debounceTime, map } from 'rxjs/operators';
import { Observable } from 'rxjs';

function userAvailability(c: AbstractControl): { [key: string]: boolean } | null {
  const userName = c.get('userName');
  if (true) {
    c.get('userName').setErrors({
      availability: true,
    });
  }
  return { match: null };
}

@Component({
  selector: 'app-users-edit',
  templateUrl: './users-edit.component.html',
  styleUrls: ['./users-edit.component.css']
})
export class UsersEditComponent implements OnInit {
  routeId: number;
  userForm: FormGroup
  user = new User();
  userNameEnabled: boolean;
  // user: User = {} as User;
  constructor(
    private route: ActivatedRoute,
    private api: ApiRestService,
    private router: Router,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    // this.userForm = new FormGroup({
    //   userId: new FormControl(),
    //   name: new FormControl(),
    //   userName: new FormControl(),
    //   password: new FormControl()
    // });
    // build form group
    this.userForm = this.fb.group({
      userId: [ null ],
      name: ['', [Validators.required, Validators.minLength(10)] ],
      userName: ['', [Validators.required, Validators.minLength(6), Validators.pattern('^[^a-z]*[a-z]*[^a-z]*$')] ],
      password: ['', [Validators.required, Validators.minLength(8)] ]
    });
    // get route params
    this.routeId = +this.route.snapshot.paramMap.get('id');
    if (this.routeId > 0) {
      this.getUser(this.routeId);
      this.userNameEnabled = true;
    } else {
      this.userNameEnabled = false;
    }
    // value changes

    const userNameValidation = this.userForm.get('userName');
    // if (this.routeId > 0) {
    //   userNameValidation.clearValidators();
    // } else {
    //   userNameValidation.setValidators(Validators.required)
    // }

    userNameValidation.valueChanges.pipe(
      debounceTime(1000)
    )
    .subscribe(
      value => {
        if (this.routeId > 0) {
          userNameValidation.clearValidators();
        } else {
          userNameValidation.setValidators(Validators.required)
          this.api.get(environment.apis.netCoreAPI.host, '', `user/validate/availability/${value}`).subscribe(
            (data: any) => {
              console.log(`${typeof(data)} value: ${data}`);
              if (!data) {
                userNameValidation.setValidators(Validators.required);
                this.userForm.controls.userName.setErrors({inuse: true});
              }
            },
            (err: any) => {
              console.log(err);
            }
          );
        }
      }
    );
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
      if (user.userId === null || user.userId === 0) {
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
