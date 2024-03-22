import { Component } from '@angular/core';
import { PostService } from '../../service/post.service';
import { IPost } from '../../interfaces/postInterface';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { PostDetailComponent } from '../post-detail/post-detail.component';
import { CONSTANTS } from '../../Constants/constant';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent {
  public dataSource = new MatTableDataSource<IPost>();
  public displayedColumns: string[] = CONSTANTS.COLUMN_NAME;
  public id = CONSTANTS.ID
  public userId = CONSTANTS.USERID
  public title = CONSTANTS.TITLE
  public body = CONSTANTS.BODY
  constructor(private postService: PostService, public dialog: MatDialog) { }

  ngOnInit() {
    this.getAllPosts()
  }

  // To get All Posts Data
  public getAllPosts(): void {
    this.postService.getAllPosts().subscribe((res: IPost[]) => this.dataSource.data = res)
  }

  //To open Dialog Box
  public openDialog(id: any): void {
    const dialogRef = this.dialog.open(PostDetailComponent, {
      data: { id },
    });
  }
}
