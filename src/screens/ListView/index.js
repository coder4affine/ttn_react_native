import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, Text, FlatList, Image } from "react-native";

class index extends Component {
  state = { data: null };

  constructor(props) {
    super(props);
    this.getData();
  }

  getData = async () => {
    const res = await fetch("https://reqres.in/api/users?per_page=12");
    const data = await res.json();
    this.setState({ data });
  };

  render() {
    const { data } = this.state;
    if (!data) {
      return (
        <View>
          <Text>No data Available</Text>
        </View>
      );
    }
    return (
      <FlatList
        horizontal
        data={data.data}
        keyExtractor={item => `${item.id}`}
        renderItem={({ item }) => (
          <View
            style={{
              flexDirection: "row",
              padding: 10
            }}
          >
            <Image
              style={{
                height: 50,
                width: 50
              }}
              borderRadius={25}
              source={{ uri: item.avatar }}
            />
            <Text style={{ flex: 1 }}>{`${item.first_name} ${
              item.last_name
            }`}</Text>
          </View>
        )}
      />
    );
  }
}

index.propTypes = {};

export default index;
