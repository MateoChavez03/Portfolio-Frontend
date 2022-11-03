import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { AboutComponent } from './component/about/about.component';
import { WorkComponent } from './component/work/work.component';
import { EducationComponent } from './component/education/education.component';
import { AbilitiesComponent } from './component/abilities/abilities.component';
import { ProjectsComponent } from './component/projects/projects.component';
import { LogInComponent } from './component/log-in/log-in.component';
import { CircleComponent } from './component/circle/circle.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    WorkComponent,
    EducationComponent,
    AbilitiesComponent,
    ProjectsComponent,
    LogInComponent,
    CircleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
