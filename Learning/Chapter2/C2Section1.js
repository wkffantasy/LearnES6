/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Text,
  View,
} from 'react-native';

export default class C2S1 extends Component {

  componentWillMount() {
    console.log('C2S1 componentWillMount');
  }
  componentDidMount() {
    console.log('C2S1 componentDidMount');
  }

  render() {
    return (
      <View style={{ flex:1, backgroundColor:'white', justifyContent:'center', alignItems:'center' }}>
        <Text style={{ fontSize:20 }}>
          C2S1
        </Text>
        <Text style={{ marginTop:10, color:'#333333' }}>
          somthing
        </Text>
      </View>
    );
  }
}
