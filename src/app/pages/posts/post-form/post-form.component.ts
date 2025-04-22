import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { PostsService } from '../posts.service';
import { UsersService } from '../users.service';
import { Post } from '../models/post.model';
import { User } from '../models/user.model';
import { NgSelectModule } from '@ng-select/ng-select';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-post-form',
  standalone: true,
  imports: [
    TranslateModule,
    RouterModule,
    FormsModule,
    NgSelectModule,
    CommonModule,
  ],
  templateUrl: './post-form.component.html',
})
export class PostFormComponent implements OnInit {
  isEditMode = false;
  isSubmitting = false;
  post: Post = {};
  users : User[] = [];

  constructor(
    private route: ActivatedRoute,
    private postsService: PostsService,
    private usersService: UsersService,
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.getUsersList();
    const id = this.route.snapshot.paramMap.get('id');
    this.isEditMode = !!id;
    if (this.isEditMode) {
      this.getPostByID(+id!);
    }
  }

  hasError(control: any, errorType: string): boolean {
    return control?.errors?.[errorType];
  }

  getPostByID(id: number) {
    this.postsService.getPost(id).subscribe({
      next: (post) => {
        this.post = post;
      },
      error: (error) => {
        this.toastr.error('Faild to get post', 'Error');
      },
    }
    );
  }

  getUsersList() {
    this.usersService.getUsers().subscribe({
      next: (users) => {
        this.users = users;
      }, 
      error: (error) => {
        this.toastr.error('Failed to get users', 'Error');
      }
    });
  }

  savePost(form: NgForm) {
    this.isSubmitting = true;
    if (!form.valid) {
      return;
    }
    if(this.isEditMode) {
      this.postsService.updatePost(this.post.id!, this.post).subscribe({
        next: (post) => {
          this.toastr.success('Post Updated Successfully');
          this.isSubmitting = false;
          this.router.navigate(['/posts']);
        },
        error: (error) => {
          this.toastr.error('Failed to update post', 'Error');
        },
      });
    } else {
      this.postsService.addPost(this.post).subscribe({
        next: (post) => {
          this.toastr.success('Post Added Successfully');
          this.isSubmitting = false;
          this.router.navigate(['/posts']);
        },
        error: (error) => {
          this.toastr.error('failed to save post', 'Error');
        },
      });
    }
  }
}
