/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';

// import C1S1 from './Learning/Chapter1/C1Section1';
import C2S1 from './Learning/Chapter2/C2Section1';

export default function LearnES6() {
  return (
    <C2S1 />
  );
}

AppRegistry.registerComponent('LearnES6', () => LearnES6);
