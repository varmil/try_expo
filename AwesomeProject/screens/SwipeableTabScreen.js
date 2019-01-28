import * as React from 'react'
import { View, Text, StyleSheet, Dimensions, ScrollView } from 'react-native'
import { TabView, TabBar, SceneMap } from 'react-native-tab-view'
import { Card, ListItem, Button } from 'react-native-elements'

const DummyContent = props => (
  <Card
    title="今、気になってる生地は？？"
    image={{
      uri:
        'https://qiita-image-store.s3.amazonaws.com/0/99874/87e36084-8db9-58c1-4e4d-2cce8d490741.png'
    }}
  >
    <Text style={{ marginBottom: 10 }}>
      今日は成人式ですね。 皆さん、今から２０歳に戻れるとしたら、{'\n'}
      成人式にはスーツを着ていきますか？ それとも着物着ていきますか？{'\n'}
      当時は既成のスーツが似合わない体型なので、着物を着ていきましたが、今ならオーダー出来るのでスーツもありかな、と。
    </Text>
    <Button
      icon={{ name: 'eye', type: 'octicon' }}
      backgroundColor="#03A9F4"
      title="もっとみる"
    />
  </Card>
)

const createContents = () =>
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map(i => (
    <DummyContent key={i} />
  ))

const FirstRoute = () => (
  <ScrollView style={[styles.scene, { backgroundColor: '#ff4081' }]}>
    {createContents()}
  </ScrollView>
)
const SecondRoute = () => (
  <ScrollView style={[styles.scene, { backgroundColor: '#673ab7' }]}>
    {createContents()}
  </ScrollView>
)
const ThirdRoute = () => (
  <ScrollView style={[styles.scene, { backgroundColor: '#eee' }]}>
    {createContents()}
  </ScrollView>
)

export default class TabViewExample extends React.Component {
  static navigationOptions = {
    title: 'Scrollable Tabs'
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
