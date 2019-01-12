import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, Text } from "react-native";
import { connect } from "react-redux";

export default WrappedComponent => {
  class hocComponent extends Component {
    state = {
      userID: 1
    };
    render() {
      return (
        <View style={{ flex: 1 }}>
          <Text>Hello from HOC</Text>
          <WrappedComponent {...this.props} {...this.state} />
        </View>
      );
    }
  }

  hocComponent.propTypes = {};
  function mapStateToProps(state) {
    return {
      language: state.language
    };
  }

  function mapDispatchToProps(dispatch) {
    return {
      changeLanguage: data =>
        dispatch({ type: "Language_request_success", payload: data })
    };
  }

  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(hocComponent);
};
