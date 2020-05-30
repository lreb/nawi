import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'; // read route params

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {

  serviceId;
  constructor(private route: ActivatedRoute, private router: Router) {
    console.log(this.route.snapshot.paramMap.get('id'));
    this.serviceId = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
  }

  onBack(): void {
    this.router.navigate(['/services']);
  }

}
