import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from '../../shared/sidebar/sidebar.component';
import { NavbarComponent } from "../../shared/navbar/navbar.component";
import { NotificationComponent } from "../../shared/notification/notification.component";

@Component({
  selector: 'app-main-layout',
  imports: [RouterOutlet, SidebarComponent, NavbarComponent, NotificationComponent],
  templateUrl: './main-layout.component.html',
})
export class MainLayoutComponent {

}
