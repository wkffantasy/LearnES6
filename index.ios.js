/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} from 'react-native';

//第一章
import C1S1 from './Learning/Chapter1/C1Section1';
//第二章
import C2S1 from './Learning/Chapter2/C2Section1';
import C2S2 from './Learning/Chapter2/C2Section2';

export default function LearnES6() {
  return (
    <C2S2 />
  );
}

AppRegistry.registerComponent('LearnES6', () => LearnES6);
