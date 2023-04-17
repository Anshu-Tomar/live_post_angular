// import { HttpClient } from "@angular/common/http";
// import { Injectable } from "@angular/core";
// import { Post } from "./post.model";
// import { PostService } from "./post.service";
// import { tap } from "rxjs/operators";

// //backend url https://live-post-66a7b-default-rtdb.firebaseio.com/
// @Injectable({ providedIn: 'root'})
// export class BackEndService{

//     constructor(private postService:PostService, private http:HttpClient){}
//     // fun 1-Save
   
//     saveData(){
//         // step1 - get list of posts
//         const listOfPosts: Post[]=this.postService.getPosts();
//         //step2 - save list of posts
//         this.http.put('https://live-post-66a7b-default-rtdb.firebaseio.com/posts.json',listOfPosts).subscribe((res)=> {
//             console.log(res);
//         });
//     }
   

//     //fun 2 - Fetch
//     fetchData(){
//         //step1
//         this.http.get<Post[]>('https://live-post-66a7b-default-rtdb.firebaseio.com/posts.json').pipe(
//             tap((listOfPosts:Post[])=> {
//                 console.log(listOfPosts)
//                 //step2 send to post.services
//                 this.postService.setPosts(listOfPosts);
//             })
//         ).subscribe();
//     }
// }


