import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Params, Router } from '@angular/router';
// import { BackEndService } from '../back-end.service';
import { Post } from '../post.model';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.css'],
})
export class PostEditComponent implements OnInit {
  form: FormGroup;
  editMode = false;
  response:any;
  cover?: File;
  selectedFiles?: FileList;
  data:string;
  singleData:any;

  constructor(
    private postService: PostService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
  ) {}


  ngOnInit(): void {

    this.form = this.formBuilder.group({
      title: ['',Validators.required ],
      description: ['',Validators.required ],
      imagepath: ['',Validators.required ]
    });

    this.data = this.route.snapshot.params['postId'];
    this.editMode = !this.data
    if(!this.editMode){
      this.postService.getSingleLivePost(this.data).subscribe((res)=>{
        this.singleData = res
        console.log(this.singleData)
        this.form.controls["title"].setValue(this.singleData.title);
        this.form.controls["description"].setValue(this.singleData.description);
        this.form.controls["imagepath"].setValue(this.singleData.imagepath);
        this.editMode=false
      })
    }
  }


  //get list function
  getData(){
    this.postService.getLivePost().subscribe((res)=>{
      
    })
  }

  // change event for file
  selectFile(event: any): void {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.form.get('imagepath').setValue(file);
      this.cover =file;      
    }
  }
 
 
  onSubmit() {
    // this is live post project and it's properly working thanks..
    if (!this.editMode) {
      this.postService.updateLivePost(this.data,this.form.value).subscribe((res)=>{
        // console.log(res)
       
      });
      
    } else {

      const formData = new FormData();
      formData.append('title', this.form.get('title').value);
      formData.append('description', this.form.get('description').value);
      formData.append('imagePath', this.cover, this.cover.name);
      console.log(formData)
      this.postService.CreatePost(formData).subscribe(
        (res) => { 
          // console.log(res);

          this.getData()
          this.router.navigate(['']).then();
        },
        (err) => {  
          console.log(err);
        }
      );
    
    } 
   }
   
  onclear() {
    this.form.reset();
  }
}
