import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-sidebar',
  imports: [TranslateModule, CommonModule, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  isSidebarOpen = false;
  lang = 'en';
  sidebarItems = [
    { key: 'SIDEBAR.DASHBOARD', link: '/dashboard' },
    { key: 'SIDEBAR.POSTS_LISTS', link: '/posts' },
  ];

  constructor(private authService: AuthService, private translate: TranslateService) {
    this.translate.onLangChange.subscribe(event => {
      this.lang = event.lang;
    })
  }

  toggleSidebar(): void {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
  
  logout(){
    this.authService.logout();
  }
}
