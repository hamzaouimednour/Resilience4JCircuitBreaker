import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GitHubComponent } from './github/github.component';

const routes: Routes = [
  { path: '', redirectTo: '/github', pathMatch: 'full' },
  { path: 'github', component: GitHubComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
