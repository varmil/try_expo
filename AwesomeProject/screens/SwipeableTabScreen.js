import * as React from 'react'
import { View, StyleSheet, Dimensions } from 'react-native'
import { TabView, TabBar, SceneMap } from 'react-native-tab-view'

const FirstRoute = () => (
  <View style={[styles.scene, { backgroundColor: '#ff4081' }]} />
)
const SecondRoute = () => (
  <View style={[styles.scene, { backgroundColor: '#673ab7' }]} />
)
const ThirdRoute = () => (
  <View style={[styles.scene, { backgroundColor: '#eee' }]} />
)

export default class TabViewExample extends React.Component {
  static navigationOptions = {
    title: 'Links'
  }

  state = {
    index: 0,
    routes: [
      { key: 'first', title: 'First' },
      { key: 'second', title: 'Second' },
      { key: 'third', title: 'Third' }
    ]
  }

  render() {
    return (
      <TabView
        navigationState={this.state}
        renderScene={SceneMap({
          first: FirstRoute,
          second: SecondRoute,
          third: ThirdRoute
        })}
        onIndexChange={index => this.setState({ index })}
        initialLayout={{ width: Dimensions.get('window').width, height: 0 }}
      />
    )
  }
}

const styles = StyleSheet.create({
  scene: {
    flex: 1
  }
})
