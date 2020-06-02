import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'; // read route params
import { IService } from 'src/app/models/IServices';

@Component({
  selector: 'app-edit-service',
  templateUrl: './edit-service.component.html',
  styleUrls: ['./edit-service.component.css']
})
export class EditServiceComponent implements OnInit {
  /** Initialize service, be able to assign values latter */
  service: IService = {} as IService;
  serviceId;
  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {
    console.log(this.route.snapshot.paramMap.get('id'));
    this.serviceId = this.route.snapshot.paramMap.get('id');
  }
  /**
   * Init event
   */
  ngOnInit(): void {
    this.route.paramMap.subscribe( params => {
      const serviceId = +params.get('id');

      if (serviceId > 0) {
        console.log(serviceId)
        this.service.id = serviceId;
      }
      console.log(serviceId)
      this.getService(serviceId);
    });
  }
  /**
   * get service
   * @param id service id
   */
  getService(id: number): void {
    console.log(`get service ${id}`);
  }
  /**
   * cancel action
   */
  cancelButton(): void {
    this.router.navigate(['/services']);
  }
  /**
   * delete action
   */
  deleteButton(): void {
    console.log(this.service?.id)
    if (this.service?.id === undefined) {
      alert(`cannot delete this service beacuse it is not saved!`)
    } else {
      if (confirm(`Confirm delete?`)){
        this.deleteService(this.service);
      }
    }
  }
  /**
   * save action
   */
  saveButton(): void {
    if (this.service.id === 0) {
      this.saveService(this.service);
    } else {
      this.updateService(this.service);
    }
  }
  deleteService(service): void {
    console.log('deleteService');
  }
  /**
   * create new service
   * @param service service object
   */
  saveService(service): void {
    console.log('updateService');
  }
  /**
   * update existing service
   * @param service service object
   */
  updateService(service): void {
    console.log('updateService');
  }

}
