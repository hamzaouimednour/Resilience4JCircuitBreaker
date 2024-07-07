import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { GitHubComponent } from './github/github.component';
import { RepositoryDetailsDialogComponent } from './github/repository-details-dialog/repository-details-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    GitHubComponent,
    RepositoryDetailsDialogComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
