import { Dimensions } from "react-native";

const { height, width } = Dimensions.get("window");

global.HEIGHT = height;
global.WIDTH = width;
