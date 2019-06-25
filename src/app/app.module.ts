import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostsComponent } from './components/posts/posts.component';
import { PostService } from './services/post.service';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PostFormComponent } from './components/post-form/post-form.component';
import { HomeComponent } from './components/home/home.component';
import { UsersComponent } from './components/users/users.component';
import { PostComponent } from './components/post/post.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    NavbarComponent,
    PostFormComponent,
    HomeComponent,
    UsersComponent,
    PostComponent,
    NotFoundComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule {}
