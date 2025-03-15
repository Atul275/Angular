import { Component, inject, OnInit } from '@angular/core';
import { ServicesService } from './../../Services/services.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit{
  servicesService= inject(ServicesService);
  services: {title: string, image: string, description: string}[] = [];

  ngOnInit() {
    this.services= this.servicesService.services;
  }
}
