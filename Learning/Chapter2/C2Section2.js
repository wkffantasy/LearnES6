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
/*
对象的解构
 */
export default class C2S1 extends Component {

  componentWillMount() {
    console.log('C2S1 componentWillMount');
  }

  componentDidMount() {
    console.log('C2S1 componentDidMount');
    this._test1();
    this._test2();
    // this._test3();
  }
  _test3() {

  }
  _test2() {

  }
  _f1() {
    console.log('aaa');
  }
  _test1() {

  }

  render() {
    return (
      <View style={{ flex:1, backgroundColor:'white', justifyContent:'center', alignItems:'center' }}>
        <Text style={{ fontSize:20 }}>
          C2S2
        </Text>
        <Text style={{ marginTop:10, color:'#333333' }}>
          变量的解构赋值 ~ 对象的解构
        </Text>
      </View>
    );
  }
}
