import { Routes, RouterModule } from "@angular/router";
import { RouteConstant } from "../../constants/routeConstant";
import { AboutComponent } from '../about/about.component';
import { FaqComponent } from '../faq/faq.component';
import { PrivacyComponent } from '../privacy/privacy.component';


export const PUBLIC_ROUTES: Routes = [
  // { path: '', redirectTo: 'account', pathMatch: 'full' },

  {
    path: "",
     loadChildren: () =>
       import("../../modules/home/home.module").then((m) => m.HomeModule),
 },
 {
    path: RouteConstant.aboutUs,
    component: AboutComponent
  },
  {
    path: RouteConstant.faq,
    component: FaqComponent
  },
  {
    path: RouteConstant.privacyPolicy,
    component: PrivacyComponent
  }

  
  
];
