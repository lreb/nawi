import { Component, OnInit } from '@angular/core';
import { ApiRestService } from 'src/app/shared/services/api-rest.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  pipeValue = 'demo-pipe-woekds';
  data;
  errorMessage;

  constructor(private restApi: ApiRestService) { }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.restApi.get(environment.apis.main.host, '',
    'public-api/users?_format=json&access-token=2mjCKW5c2jtNfCdLY9T0PPv_mmu_qUeB21pW').subscribe({
        next: res => {  // success
          this.data = res.result;
        },
        error: err => { // error
          this.errorMessage = err;
        }
      });
      //   res => {
      //   console.log(res);
      //   this.data = res.result;
      // }, err => {
      //   console.log(err);
      // });
  }
}
