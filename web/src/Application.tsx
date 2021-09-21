import React from "react";
import { BrowserRouter, Switch, Route, RouteProps } from "react-router-dom";
import { routes } from "./utils/config/routes";
import { Navigation } from "./components";

export const Application: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Navigation />
        {routes.map((route, key) => (
          <Route
            key={key}
            path={route.path}
            exact={route.exact}
            render={(props: RouteProps) => (
              <route.component name={route.name} {...route.props} {...props} />
            )}
          />
        ))}
      </Switch>
    </BrowserRouter>
  );
};
