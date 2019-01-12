import React, { PureComponent } from "react";
import { YellowBox } from "react-native";
import {
  reduxifyNavigator,
  createReactNavigationReduxMiddleware
} from "react-navigation-redux-helpers";
import { Provider, connect } from "react-redux";

import Navigator from "./src/navigation";
import configureStore from "./src/configureStore";
import ThemeContext from "./src/contextAPI/themeContext";

const middleware = createReactNavigationReduxMiddleware(
  "root",
  state => state.nav
);

const Root = reduxifyNavigator(Navigator, "root");
const mapStateToProps = state => ({
  state: state.nav
});
const AppWithNavigationState = connect(mapStateToProps)(Root);

const store = configureStore(middleware);

export default class App extends PureComponent {
  state = {};

  render() {
    return (
      <Provider store={store}>
        <ThemeContext>
          <AppWithNavigationState />
        </ThemeContext>
      </Provider>
    );
  }
}
