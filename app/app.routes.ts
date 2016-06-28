import {RouterConfig} from "@angular/router";
import {NS_ROUTER_DIRECTIVES, nsProvideRouter} from "nativescript-angular/router"

import {HelloComponent} from "./pages/hello/hello.component";

export const routes: RouterConfig = [
  { path: "", component: HelloComponent }
];

export const APP_ROUTER_PROVIDERS = [
  nsProvideRouter(routes, {})
];