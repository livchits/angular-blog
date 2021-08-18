import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AlbumsModule } from './albums/albums.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommentsModule } from './comments/comments.module';
import { HeaderComponent } from './components/header/header.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { PostsModule } from './posts/posts.module';
import { UsersModule } from './users/users.module';
@NgModule({
  declarations: [AppComponent, TabsComponent, HeaderComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatTabsModule,
    HttpClientModule,
    UsersModule,
    PostsModule,
    CommentsModule,
    AlbumsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
