import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// importing the two components 
import { IntroductionComponent } from './introduction/introduction.component';
import { SkillsComponent } from './skills/skills.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ServicesComponent }  from './services/services.component';

const routes: Routes = [
	// setting the path of the component
	{path: "", redirectTo:"introduction", pathMatch:"full"},
	{path: "introduction", component:IntroductionComponent},
	{path: "skills", component:SkillsComponent},
	{path: "portfolio", component:PortfolioComponent},
	{path: "services", component:ServicesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
