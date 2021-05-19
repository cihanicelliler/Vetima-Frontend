import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  language:boolean=true;
  constructor() { }

  ngOnInit(): void {
    this.checkLanguage();
  }
  checkLanguage() {
    if (localStorage.getItem('Language') == 'EN') {
      this.language=false;
    } else {
      this.language=true;
    }
  }
}
