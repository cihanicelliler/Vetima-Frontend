import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-company-events',
  templateUrl: './company-events.component.html',
  styleUrls: ['./company-events.component.css']
})
export class CompanyEventsComponent implements OnInit {

  language:boolean=true;
  constructor() { }

  ngOnInit(): void {
    this.checkLanguage();
  }

  checkLanguage() {
    if (localStorage.getItem('Language') == 'EN') {
      this.language = false;
    } else {
      this.language = true;
    }
  }

}
