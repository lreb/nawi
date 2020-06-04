import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersListComponent } from './users-list.component';
import { ApiRestService } from 'src/app/shared/services/api-rest.service';
import { HttpTestingController, HttpClientTestingModule, TestRequest } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from 'src/app/models/classes/User';

describe('UsersListComponent', () => {
  let component: UsersListComponent;
  let fixture: ComponentFixture<UsersListComponent>;
  let apiService: ApiRestService;
  let httpTestingController: HttpTestingController;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersListComponent ],
      imports: [ HttpClientTestingModule ],
      providers: [ ApiRestService ]
    })
    .compileComponents();
    apiService = TestBed.inject(ApiRestService);
    httpTestingController = TestBed.inject(HttpTestingController);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    apiService.get(environment.apis.netCoreAPI.host, '', 'user')
      .subscribe((data: User[]) => {
        expect(data.length).toBe(1);
      });
    let userRequest: TestRequest = httpTestingController.expectOne('/api/user');
    expect(userRequest.request.method).toEqual('Get');
    // userRequest.flush(userTest);
  });
});
