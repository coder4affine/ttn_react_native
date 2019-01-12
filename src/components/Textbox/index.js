import React, { Component } from "react";
import PropTypes from "prop-types";
import { TextInput, View, Text } from "react-native";

export default class index extends Component {
  static propTypes = {};

  render() {
    const { label, placeholder, value, onChangeText, error } = this.props;
    return (
      <View>
        {label && (
          <Text
            style={{
              fontWeight: "500",
              fontSize: 14,
              color: "#777777",
              marginBottom: 7
            }}
          >
            {label}
          </Text>
        )}
        <TextInput
          {...this.props}
          accessible
          accessibilityLabel={label}
          autoCapitalize="none"
          ref={el => {
            this.input = el;
          }}
          onFocus={() => {
            this.input.setNativeProps({
              style: {
                borderWidth: 1,
                borderColor: "#6d55c0"
              }
            });
          }}
          onBlur={e => {
            this.input.setNativeProps({
              style: {
                borderWidth: 0
              }
            });
          }}
          value={value}
          underlineColorAndroid="transparent"
          style={{
            borderRadius: 4,
            borderWidth: 1,
            borderColor: "#e8e8e8",
            backgroundColor: "#f4f2fb",
            padding: 8
          }}
          onChangeText={onChangeText}
        />
        {error && <Text>{error}</Text>}
      </View>
    );
  }
}
