import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
declare var $: any;
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(private router: Router, private toastrService: ToastrService) {}

  language: boolean = true;
  ngOnInit(): void {
    this.checkLanguage();
    $(document).ready(function () {
      var scroll_pos = 0;
      $(document).scroll(function () {
        scroll_pos = $(this).scrollTop();
        if (scroll_pos > 0) {
          $('nav').css({ 'background-color': '#00a7b8', transition: '.4s' });
          $('li>a.nav-link').css({ color: '#eef8ff', transition: '.9s' });
          $('li.nav-item').css({
            'border-bottom': '5px solid #00a7b8',
            'border-radius': '8%',
            transition: '.1s',
          });
          $('li.nav-item').mouseover(function () {
            $(this).css({
              'border-bottom': '5px solid #eef8ff',
              'border-radius': '20%',
              transition: '.4s',
            });
          });
          $('li.nav-item').mouseleave(function () {
            $(this).css({
              'border-bottom': '5px solid #00a7b8',
              'border-radius': '20%',
              transition: '.4s',
            });
          });
        } else {
          $('nav').css({ 'background-color': '#eef8ff', transition: '.4s' });
          $('li>a.nav-link').css({ color: '#00a7b8', transition: '.9s' });
          $('li.nav-item').css({
            'border-bottom': '5px solid #eef8ff',
            'border-radius': '8%',
            transition: '.1s',
          });
          $('li.nav-item').mouseover(function () {
            $(this).css({
              'border-bottom': '5px solid #00a7b8',
              'border-radius': '20%',
              transition: '.4s',
            });
          });
          $('li.nav-item').mouseleave(function () {
            $(this).css({
              'border-bottom': '5px solid #eef8ff',
              'border-radius': '20%',
              transition: '.4s',
            });
          });
        }
      });
    });
  }

  goProducts() {
    this.router.navigate(['/products']);
    if (this.language) {
      this.toastrService.success('Ürünler listeleniyor...');
    } else {
      this.toastrService.success('Listing Products...');
    }
    window.scroll(0,0);
  }
  goToCompanyProfile() {
    this.router.navigate(['/company-profile']);
    if (this.language) {
      this.toastrService.success('Şirket Profiline yönlendiriliyor...');
    } else {
      this.toastrService.success('Redirects to Company Profile...');
    }
    window.scroll(0,0);
  }
  goToEvents() {
    this.router.navigate(['/events']);
    if (this.language) {
      this.toastrService.success('Etkinliklere yönlendiriliyor...');
    } else {
      this.toastrService.success('Redirects to events...');
    }
    window.scroll(0,0);
  }
  goToHomePage() {
    this.router.navigate(['/']);
    if (this.language) {
      this.toastrService.success('Anasayfaya yönlendiriliyor...');
    } else {
      this.toastrService.success('Redirects to homepage...');
    }
    window.scroll(0,0);
  }
  goToVideos() {
    this.router.navigate(['/videos']);
    if (this.language) {
      this.toastrService.success('Tanıtım Videolarına yönlendiriliyor...');
    } else {
      this.toastrService.success('Redirects to Introductory Videos...');
    }
    window.scroll(0,0);
  }
  goToContact() {
    this.router.navigate(['/contact']);
    if (this.language) {
      this.toastrService.success('İletişime yönlendiriliyor...');
    } else {
      this.toastrService.success('Redirects to Contact...');
    }
    window.scroll(0,0);
  }
  setTurkish() {
    localStorage.setItem('Language', 'TR');
    setTimeout(() => {
      window.location.reload();
    }, 1000);
    window.scroll(0, 0);
  }
  setEnglish() {
    localStorage.setItem('Language', 'EN');
    setTimeout(() => {
      window.location.reload();
    }, 1000);

    window.scroll(0, 0);
  }
  checkLanguage() {
    if (localStorage.getItem('Language') == 'EN') {
      this.language = false;
    } else {
      this.language = true;
    }
  }
}
