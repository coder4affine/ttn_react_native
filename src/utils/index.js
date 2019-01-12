import { Dimensions, NativeModules, Platform } from "react-native";

const { StatusBarManager, DeviceInfo } = NativeModules;

const { height, width } = Dimensions.get("window");

global.HEIGHT = height;
global.WIDTH = width;

const isIphoneX = DeviceInfo.isIPhoneX_deprecated;

const iosStatusBarHeight = isIphoneX ? 35 : 20;

const STATUSBAR_HEIGHT =
  Platform.OS === "ios" ? iosStatusBarHeight : StatusBarManager.HEIGHT;

global.StatusbarHeight = STATUSBAR_HEIGHT;

global.isIphoneX = isIphoneX;
