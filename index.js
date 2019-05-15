/** @format */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

// import { createStore } from "redux";
// import { Provider } from "react-redux";
// import reducer from "./reducer";
// const myStore = createStore(reducer);

// AppRegistry.registerComponent(appName, () => 
// <Provider store={myStore}>
// App
// </Provider>);

AppRegistry.registerComponent(appName, () => App);