import { Routes } from '@angular/router';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { AuthGuard } from './core/guards/auth.guard';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PostsListComponent } from './pages/posts/posts-list/posts-list.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { MinimalLayoutComponent } from './layouts/minimal-layout/minimal-layout.component';
import { PostFormComponent } from './pages/posts/post-form/post-form.component';

export const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    component: MainLayoutComponent,
    children: [
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'posts', component: PostsListComponent },
      { path: 'posts/new', component: PostFormComponent },
      { path: 'posts/:id', component: PostFormComponent },
    ],
  },
  {
    path: '',
    component: MinimalLayoutComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: '**', canActivate: [AuthGuard], component: ErrorPageComponent },
    ],
  },
  {
    path: '**',
    redirectTo: 'login',
    pathMatch: 'full',
  },
];
