import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-company-video',
  templateUrl: './company-video.component.html',
  styleUrls: ['./company-video.component.css']
})
export class CompanyVideoComponent implements OnInit {

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
