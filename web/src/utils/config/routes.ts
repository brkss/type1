import { IRoute } from "../types/Route";
import { Home, Survey } from "../../pages";

export const routes: IRoute[] = [
  {
    name: "home",
    path: "/",
    exact: true,
    component: Home,
  },
  {
    name: "survey",
    path: "/survey",
    exact: true,
    component: Survey,
  },
];
