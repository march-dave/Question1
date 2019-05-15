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

import fetchCall from "./fetchCall";
import { sortAlphabetize } from "./util";

// import { createStore } from "redux";
// import { Provider } from "react-redux";
// import reducer from "./reducer";
// import { connect } from "react-redux";
// import action from "./action";

// const myStore = createStore(reducer);

const mapStateToProps = state => {
  return {
    getpage: state.pages
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setpage: data => dispatch(action(data))
  };
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pages: [],
      listMode: 'list'
    };
  }

  async componentDidMount() {
    const deals = await fetchCall.fetchInitialDeals();

    // this.props.setpage( deals.filter(data => data.avatar_large !== null)

    // await this.props.setpage( "aaa"  )

    this.setState({
      pages: deals.filter(data => data.avatar_large !== null)
    });
  }

  _onPressItem = () => {
    console.log("open item");
  };

  setMode(e) {
    this.setState({ listMode: e });
    console.log(e);
  }

  renderItemGrid({ item, index }) {
    return (
      <TouchableOpacity onPress={this._onPressItem}>
        <View
          style={{
            flex: 1,
            flexDirection: "column",
            padding: 10,
            backgroundColor: item.backgroundColor
          }}
        >
          <Image
            style={{ width: 200, height: 200 }}
            source={{
              uri: item.avatar
                ? item.avatar
                : "https://imgplaceholder.com/72x80"
            }}
          />
          <View
            style={{
              flex: 1,
              paddingLeft: 10,
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "stretch"
            }}
          >
            <Text>
              {item.first_name} {item.last_name}
            </Text>
            <Text>{item.email}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }

  renderItem({ item, index }) {
    return (
      <TouchableOpacity onPress={this._onPressItem}>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            backgroundColor: item.backgroundColor
          }}
        >
          <Image
            style={{ width: 100, height: 100 }}
            source={{
              uri: item.avatar
                ? item.avatar
                : "https://imgplaceholder.com/72x80"
            }}
          />
          <View
            style={{
              flex: 1,
              paddingLeft: 10,
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "stretch"
            }}
          >
            <Text>
              {item.first_name} {item.last_name}
            </Text>
            <Text>{item.email}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <ActionBar
          containerStyle={styles.bar}
          title={"User List"}
          rightIcons={[
            {
              image: require("./resources/img/grid.png"),
              onPress: () => this.setMode('grid')
              // onPress: () => this.setState({ listMode: false })
              // onPress: this.gridMode
            },
            {
              image: require("./resources/img/list.png"),
              // onPress: () => console.log("List Mode")
              // onPress: () => this.setState({ listMode: true })
              onPress: () => this.setMode('list')
            },
            {
              image: require("./resources/img/sort_az.png"),
              // onPress: this.handleSort(true)
              onPress: () => {
                this.setState({
                  pages: sortAlphabetize(this.state.pages, "last_name", true)
                });
              }
            },
            {
              image: require("./resources/img/sort_za.png"),
              // onPress: () => console.log("Sort last Name A-Z")
              onPress: () => {
                this.setState({
                  pages: sortAlphabetize(this.state.pages, "last_name", false)
                });
              }
            },
            {
              image: require("./resources/img/avatar.png"),
              onPress: () =>
                console.log("Only show elements that have large avatars")
            }
          ]}
        />

        { (this.state.listMode) ==='list' ? (
          <FlatList
            contentContainerStyle={styles.list}
            data={this.state.pages}
            renderItem={this.renderItem}
          />
        ) : (
          <FlatList
            contentContainerStyle={styles.list}
            // data={require("./resources/MOCK_DATA.json")}
            data={this.state.pages}
            renderItem={this.renderItemGrid}
            horizontal={true}
          />
        )}
        {/* <FlatList
          contentContainerStyle={styles.list}
          // data={require("./resources/MOCK_DATA.json")}
          data={this.state.pages}
          renderItem={
            this.state.listMode ? this.renderItem : this.renderItemGrid
          }
          // renderItem={this.renderItemGrid}
        /> */}
      </View>
    );
  }
}

// App = connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(App);

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
