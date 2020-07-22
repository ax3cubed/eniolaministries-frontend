import { Component, OnInit } from '@angular/core';
import { About_usService } from 'app/services/about_us.service';
declare var $: any;
@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {
   data ={};
  constructor(private aboutService:About_usService) { }
  getAboutData( ){
    this.aboutService.getAbout().subscribe(data=>{
      this.data = data;
    })
  }
  ngOnInit() {
    this.getAboutData();
  }

}
