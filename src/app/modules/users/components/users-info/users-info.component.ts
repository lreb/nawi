import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/classes/User';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiRestService } from 'src/app/shared/services/api-rest.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-users-info',
  templateUrl: './users-info.component.html',
  styleUrls: ['./users-info.component.css']
})
export class UsersInfoComponent implements OnInit {

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

  getUser(id: number): void{
    this.api.get(environment.apis.netCoreAPI.host, '', `user/${id}`).subscribe(
      (data: User) => this.user = data,
      (err: any) => console.log(err)
    );
  }
}
