import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './about/content.component';
import { ContactComponent } from './contact/contact.component';
import { HeadComponent } from './home/head.component';
import { ResumeComponent } from './resume/resume.component';

const routes: Routes = [
  { path: 'about', component: ContentComponent },
  { path: 'home', component: HeadComponent },
  { path: 'resume', component: ResumeComponent },
  {path: 'contact', component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
