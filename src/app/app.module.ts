import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostComponent } from './post/post.component';
import { AuthComponent } from './auth/auth.component';
import { PostEditComponent } from './post-edit/post-edit.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule , } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


const routes: Routes=[
  // {path: '',  component: PostListComponent, },
  {path: '',   component: PostComponent, },
  {path: 'auth',  component: AuthComponent, },
  {path: 'post-edit', component: PostEditComponent },
  {path: 'post-edit/:postId', component: PostEditComponent },
  //{path: 'post',  component: PostComponent, }

]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PostListComponent,
    PostComponent,
    AuthComponent,
    PostEditComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(routes),
    ReactiveFormsModule,
    HttpClientModule
  
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
