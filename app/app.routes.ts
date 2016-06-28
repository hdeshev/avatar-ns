import {RouterConfig} from "@angular/router";
import {NS_ROUTER_DIRECTIVES, nsProvideRouter} from "nativescript-angular/router"

import {AvatarComponent} from "./pages/avatar/avatar.component";

export const routes: RouterConfig = [
  { path: "", component: AvatarComponent }
];

export const APP_ROUTER_PROVIDERS = [
  nsProvideRouter(routes, {})
];