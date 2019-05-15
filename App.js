import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity
} from "react-native";
import AppDetail from "./AppDetail";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducer";
import { createLogger } from 'redux-logger';
import ReduxThunk from 'redux-thunk';

const logger = createLogger(); 

// const myStore = createStore(reducer);
const myStore = createStore(reducer, applyMiddleware(logger, ReduxThunk))

class App extends Component {
  render() {
    return (
      <Provider store={myStore}>
        <View style={styles.container}>
          <AppDetail />
        </View>
      </Provider>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF"
  },
  list: {
    justifyContent: "center"
  }
});
