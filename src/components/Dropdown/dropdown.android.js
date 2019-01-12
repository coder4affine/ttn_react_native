import React, { Component } from "react";
import PropTypes from "prop-types";
import { Picker, View, Text } from "react-native";

class dropdown extends Component {
  state = {
    language: "java"
  };

  render() {
    const { label } = this.props;
    return (
      <View>
        <Text
          style={[
            {
              fontWeight: "500",
              fontSize: 14,
              color: "#777777",
              marginBottom: 7
            }
          ]}
        >
          {label}
        </Text>
        <Picker
          selectedValue={this.state.language}
          style={{ height: 50, width: 100 }}
          onValueChange={(itemValue, itemIndex) =>
            this.setState({ language: itemValue })
          }
          style={{
            borderRadius: 4,
            borderWidth: 1,
            borderColor: "#e8e8e8",
            backgroundColor: "#f4f2fb"
          }}
          mode="dropdown"
        >
          <Picker.Item label="Java" value="java" />
          <Picker.Item label="JavaScript" value="js" />
        </Picker>
      </View>
    );
  }
}

dropdown.propTypes = {};

export default dropdown;
