import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GetDataComponent } from './get-data/get-data.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PostDataComponent } from './post-data/post-data.component';

@NgModule({
  declarations: [
    AppComponent,
    GetDataComponent,
    HomeComponent,
    AboutComponent,
    PostDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
