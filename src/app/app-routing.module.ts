import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsHeaderImageComponent } from './about-us/about-us-header-image/about-us-header-image.component';
import { CardPackageComponent } from './package-page/card-package/card-package.component';

const routes: Routes = [
  {path:'aboutus',component:AboutUsHeaderImageComponent},
  {path:'packagelist',component:CardPackageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }