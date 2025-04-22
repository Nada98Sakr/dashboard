import { Component, OnInit, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { PostsService } from '../posts.service';
import { Post } from '../models/post.model';
import {
  MatPaginator,
  MatPaginatorModule,
  PageEvent,
} from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { DeleteConfirmationModalComponent } from '../../../shared/delete-confirmation-modal/delete-confirmation-modal.component';
import { UserFilterModalComponent } from './user-filter-modal/user-filter-modal.component';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-posts-list',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule,
    RouterModule,
    MatTableModule,
    MatPaginatorModule,
    MatDialogModule,
    MatProgressSpinnerModule,
  ],
  templateUrl: './posts-list.component.html',
})
export class PostsListComponent implements OnInit {
  total = 0;
  page = 1;
  limit = 10;
  isLoading = false;
  isDeleting = false;
  posts: Post[] = [];
  selectedUserId?: number;
  displayedColumns: string[] = ['id', 'userId', 'title', 'body', 'actions'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private postsService: PostsService,
    private dialog: MatDialog,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts() {
    this.isLoading = true;
    this.postsService
      .getPosts(this.page, this.limit, this.selectedUserId)
      .subscribe({
        next: (data) => {
          this.posts = data.posts;
          this.total = data.total;
          this.isLoading = false;
        },
        error: (error) => {
          console.log('failed to load posts', error);
          this.isLoading = false;
        },
      });
  }

  onPage(e: PageEvent) {
    this.page = e.pageIndex + 1;
    this.limit = e.pageSize;
    this.getPosts();
  }

  resetFilter() {
    this.selectedUserId = undefined;
    this.getPosts();
  }

  openFilterDialog() {
    const dialogRef = this.dialog.open(UserFilterModalComponent);

    dialogRef.afterClosed().subscribe((result) => {
      this.selectedUserId = result ?? undefined;
      this.getPosts();
    });
  }

  openDeleteDialog() {
    const dialogRef = this.dialog.open(DeleteConfirmationModalComponent, {
      width: '611px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.isDeleting = true;
        this.postsService.deletePost(result).subscribe({
          next: () => {
            this.getPosts();
            this.toastr.success('Post deleted Successfully');
            this.isDeleting = false;
          },
          error: (error) => {
            console.log('failed to delete post', error);
            this.toastr.error('Faild to delete post', 'Error');
            this.isDeleting = false;
          },
        });
      }
    });
  }
}
