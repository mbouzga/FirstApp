import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HttpModule } from '@angular/http';
import { GalleryService } from './gallery/gallery.service';
import { AboutService } from './about/about.service';

const appRoute: Routes =[
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'gallery', component: GalleryComponent},
  {path: '', redirectTo:'/about', pathMatch: 'full'},
]
@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AboutComponent,
    ContactComponent,
    GalleryComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [GalleryService,AboutService],
  bootstrap: [AppComponent]
})
export class AppModule { }
