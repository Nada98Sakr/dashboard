import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TranslateModule],
  templateUrl: './app.component.html',
})
export class AppComponent {
  dir = 'ltr';
  constructor(private translate: TranslateService) {
    const lang = localStorage.getItem('lang') || 'en';
    this.translate.setDefaultLang('en');
    this.translate.use(lang);
    this.translate.onLangChange.subscribe(event => {
      document.documentElement.lang = event.lang;
      document.documentElement.dir = event.lang === 'ar' ? 'rtl' : 'ltr';
    });
  }
}
