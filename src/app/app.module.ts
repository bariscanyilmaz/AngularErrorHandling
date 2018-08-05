import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { PostService } from './services/post.service';
import { ErrorHandleService } from './services/error-handle.service';
import { GlobalErrorHandler } from './models/global-error-handler';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,HttpClientModule
  ],
  providers: [
    PostService,
    ErrorHandleService,
    {provide:ErrorHandler,useClass:GlobalErrorHandler}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
