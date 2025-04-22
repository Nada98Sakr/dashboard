import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-error-page',
  imports: [TranslateModule, RouterModule],
  templateUrl: './error-page.component.html',
})
export class ErrorPageComponent {

}
