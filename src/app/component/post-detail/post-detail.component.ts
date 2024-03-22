import { Component, Inject } from '@angular/core';
import { PostService } from '../../service/post.service';
import { IPost } from '../../interfaces/postInterface';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CONSTANTS } from '../../Constants/constant';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrl: './post-detail.component.css'
})
export class PostDetailComponent {
  postDetail !: IPost | null | undefined
  public headingText = CONSTANTS.POST_DETAIL
  public loading = CONSTANTS.LOADING
  public title = CONSTANTS.TITLE
  public body = CONSTANTS.BODY
  loader: boolean = false
  constructor(private postService: PostService, @Inject(MAT_DIALOG_DATA) public data: { id: string }, private dialogRef: MatDialogRef<PostDetailComponent>) {
  }

  ngOnInit() {
    this.getPostDetails()
  }

  //To get Post detail
  public getPostDetails(): void {
    this.loader = true
    this.postService.getPostDetails(this.data.id).subscribe((res: IPost) => {
      this.postDetail = res
      this.loader = false

    })
  }

  //To close Dialog Box
  public closeDialog(): void {
    this.dialogRef.close()
  }
}
