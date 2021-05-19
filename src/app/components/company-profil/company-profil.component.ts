import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-company-profil',
  templateUrl: './company-profil.component.html',
  styleUrls: ['./company-profil.component.css']
})
export class CompanyProfilComponent implements OnInit {

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
