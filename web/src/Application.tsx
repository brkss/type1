import React from "react";
import { BrowserRouter, Switch, Route, RouteProps } from "react-router-dom";
import { routes } from "./utils/config/routes";
import { Text } from "@chakra-ui/react";

export const Application: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
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
      <Text
        pos={"absolute"}
        bottom={"5px"}
        w={"100%"}
        textAlign={"center"}
        opacity={".8"}
      >
        a @brahimberkasse production
      </Text>
    </BrowserRouter>
  );
};
