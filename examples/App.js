/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {isWXAppInstalled, registerApp} from 'react-native-easy-share';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {

  constructor(props) {
    super(props);
    this.share = this.share.bind(this);
  }

  async share() {
    registerApp('12321312');
    const isWXInstalled = await isWXAppInstalled();
    console.warn('isWXInstalled:  ' + isWXInstalled);
  }


  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.share}>
          <Text style={styles.welcome}>Welcome to React Native!</Text>
        </TouchableOpacity>
        <Text style={styles.instructions}>{instructions}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
