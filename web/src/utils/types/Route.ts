export interface IRoute {
  name: string;
  path: string;
  exact: boolean;
  component: any;
  props?: any;
}
