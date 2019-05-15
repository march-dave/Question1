import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity
} from "react-native";
import ActionBar from "react-native-action-bar";
import AppDetail from "./AppDetail";

import fetchCall from "./fetchCall";
import { sortAlphabetize } from "./util";

import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducer";
// import { connect } from "react-redux";
// import action from "./action";

const myStore = createStore(reducer);

// const mapStateToProps = state => {
//   return {
//     getpage: state.pages
//   };
// };

// const mapDispatchToProps = dispatch => {
//   return {
//     setpage: data => dispatch(action(data))
//   };
// };

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
