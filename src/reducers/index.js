import { combineReducers } from "redux";
import { createNavigationReducer } from "react-navigation-redux-helpers";
import language from "./languageReducer";
import Navigator from "../navigation";

const navReducer = createNavigationReducer(Navigator);

const rootReducer = combineReducers({
  nav: navReducer,
  language
});

export default rootReducer;
