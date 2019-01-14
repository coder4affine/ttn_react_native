import React from "react";
import PropTypes from "prop-types";
import {
  View,
  Text,
  TouchableOpacity,
  Platform,
  ViewPropTypes,
  ActivityIndicator
} from "react-native";

const index = ({
  containerStyle,
  textStyle,
  value,
  onPress,
  disabled,
  loading
}) => {
  return (
    <View style={{ paddingHorizontal: 30 }}>
      <TouchableOpacity onPress={() => !disabled && onPress()}>
        <View
          style={[
            {
              paddingVertical: 15,
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 10,
              opacity: disabled ? 0.6 : 1,
              ...Platform.select({
                ios: {
                  shadowColor: "rgba(0,0,0, .2)",
                  shadowOffset: { height: 1, width: 1 },
                  shadowOpacity: 1,
                  shadowRadius: 10
                },
                android: {
                  elevation: 1
                }
              })
            },
            containerStyle
          ]}
        >
          {loading && <ActivityIndicator />}
          <Text
            style={[
              {
                fontSize: 15,
                color: "#000",
                fontWeight: "bold",
                lineHeight: 19
              },
              textStyle
            ]}
          >
            {value}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

index.propTypes = {
  containerStyle: ViewPropTypes.style,
  textStyle: ViewPropTypes.style,
  value: PropTypes.string.isRequired
};

export default index;
