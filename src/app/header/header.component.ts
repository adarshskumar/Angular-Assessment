import { Component, OnInit } from '@angular/core';
import { CountServiceService } from '../services/count-service.service';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private countService:CountServiceService) { }

  ngOnInit(): void {
  }

  getCount(){
    return this.countService.getCount();
  }

  

}
