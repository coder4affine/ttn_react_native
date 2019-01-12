import React, { Component, createContext } from "react";

export const { Consumer: ThemeConsumer, Provider } = createContext();

export default class languageContext extends Component {
  state = {
    theme: "light",
    changeTheme: newTheme => {
      this.setState({ theme: newTheme });
    }
  };

  render() {
    return <Provider value={this.state}>{this.props.children}</Provider>;
  }
}
