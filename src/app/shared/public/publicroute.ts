import { Routes, RouterModule } from "@angular/router";
import { RouteConstant } from "../../constants/routeConstant";


export const PUBLIC_ROUTES: Routes = [
  // { path: '', redirectTo: 'account', pathMatch: 'full' },

  {
    path: "",
    loadChildren: () =>
      import("../../modules/home/home.module").then((m) => m.HomeModule),
  },
  // {
  //   path: RouteConstant.aboutUs,
  //   component: AboutUs
  // }

  
];
