import { Component, Input, OnInit } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
// import { BackEndService } from '../back-end.service';
import { Post } from '../post.model';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  listOfPosts: any;
  counter: number = 1;
  data: any;
  like: any;

  constructor(private postService: PostService, private router: Router) {}

  ngOnInit(): void {
    this.getData();
  }

  // getData
  getData() {
    this.postService.getLivePost().subscribe((res) => {
      this.listOfPosts = res;
      console.log(this.listOfPosts);
    });
  }

  // Delete data
  onDelete(id: any) {
    this.postService.deleteLivePost(id).subscribe((res) => {
      this.getData();
    });
  }

  //  edit Data
  Edit(id: any) {
    this.router.navigate(['/post-edit/' + id]);
  }

  // Likepost
  likePost(id: any, countmain: any) {
    debugger
    if (this.counter == 1) {
      this.counter = countmain;
      this.counter = this.counter+1
    }
    this.like = this.counter++;
    console.log(this.like)
    let dataholder = {numberOfLikes: this.like };
    this.postService.likePost(id, dataholder).subscribe(
      (res) => {
        console.log(res)
        this.getData();
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
