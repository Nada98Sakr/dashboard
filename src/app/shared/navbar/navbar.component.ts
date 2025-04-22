import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule, TranslateModule, NgSelectModule, FormsModule],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit {
  languages = [
    { key: 'LANG.EN', flag: 'assets/images/UK-flag.svg', code: 'en' },
    { key: 'LANG.AR', flag: 'assets/images/egypt-flag.svg', code: 'ar' },
  ];

  user = {
    name: "Moni Roy",
    role: "Admin",
    image: "assets/images/user.svg",
  }

  isMenuOpen = false;
  selectedLang = this.languages[0];

  constructor(private translate: TranslateService) {}

  ngOnInit() {
    const current =
      this.translate.currentLang || this.translate.getBrowserLang() || 'en';
    this.selectedLang =
      this.languages.find((lang) => lang.code === current) ||
      this.languages[0];
    this.translate.use(this.selectedLang.code);
  }

  changeLanguage(lang: any) {
    this.selectedLang = lang;
    this.translate.use(lang.code);
    localStorage.setItem('lang', lang.code);
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
