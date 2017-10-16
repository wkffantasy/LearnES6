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
数组的解构
 */
export default class C2S1 extends Component {

  componentWillMount() {
    console.log('C2S1 componentWillMount');
  }

  componentDidMount() {
    console.log('C2S1 componentDidMount');
    // this._test1();
    // this._test2();
    this._test3();
  }
  _test3() {
    console.log('w ==', w);
    let w = 1;
    const [x = y, y = 1] = [];
    console.log('x ==', x, 'y==', y);
    //x == undefined y== 1
    /*
     在浏览器上的
    ReferenceError: y is not defined
        at <anonymous>:1:10
     */
  }
  _test2() {
    const [a, b = 1] = [0];
    console.log('a ==', a, 'b ==', b);
    //a == 0 b == 1
    const [a1, a2 = '3'] = [4, undefined];
    console.log('a1 ==', a1, 'a2 ==', a2);
    //a1 == 4 a2 == 3

    const [b1 = 1] = [undefined];
    const [b2 = 2] = [null];
    console.log('b1 ==', b1, 'b2 ==', b2);
    //b1 == 1 b2 == null
    //如果一个数组成功不严格等于undefined，默认值不会生效，如上例子，null不严格等于undefined

    const [x = this._f1()] = [1];
    console.log('x ==', x);
    //x ==1
    //如果默认值是个表达式，那么这个表达式是惰性求值，即只有用到的时候才会求值
    //上述代码中，因为x能去到值，所以不会执行_f1这个函数

    const [c1 = 1, c2 = c1] = [];
    const [d1 = 1, d2 = d1] = [2];
    const [e1 = 1, e2 = e1] = [3, 4];
    const [f1 = f2, f2 = 1] = [];
    console.log('c1 ==', c1, 'c2 ==', c2);
    //c1 == 1 c2 == 1
    console.log('d1 ==', d1, 'd2 ==', d2);
    //d1 == 2 d2 == 2
    console.log('e1 ==', e1, 'e2 ==', e2);
    //e1 == 3 e2 == 4
    console.log('f1 ==', f1, 'f2 ==', f2);
    //f1 == undefined f2 == 1
  }
  _f1() {
    console.log('aaa');
  }
  _test1() {
    // ES6允许按照一定的模式，从数组和对象中提取值，对变量进行赋值，这被称为解构
    const [a, b, c] = [1, 2, 3];
    console.log('a ==', a, 'b ==', b, 'c ==', c);
    //a == 1 b == 2 c == 3

    const [,, third] = ['aa', 'bb', 'cc'];
    console.log('third ==', third);
    //third == cc

    const [x,, y] = [1, 2, 3];
    console.log('x ==', x, 'y ==', y);
    //x == 1 y == 3

    const [head, ...tail] = [1, 2, 3, 4, 5];
    console.log('head ==', head, 'tail==', tail);
    //head == 1 tail== (4) [2, 3, 4, 5]

    const [a1, a2, ...a3] = ['a'];
    console.log('a1 ==', a1, 'a2==', a2, 'a3==', a3);
    //a1 == a a2== undefined a3== []

    const [b1, b2] = [1];
    console.log('b1 ==', b1, 'b2==', b2);
    // b1 == 1 b2== undefined
    // 如果解构不成功，变量的值就等于undefined,如上

    const [x1, x2] = [1, 2, 3];
    console.log('x1 ==', x1, 'x2 ==', x2);
    //x1 == 1 x2 == 2

    const [c1, [c2], c3] = [1, [2, 3], 4];
    console.log('c1 ==', c1, 'c2 ==', c2, 'c3 ==', c3);
    //c1 == 1 c2 == 2 c3 == 4
    //以上属于不完全解构，解构依然成功

    //如果等号右边不是可遍历的结构，会报错，以下例子
    //Invalid attempt to destructure non-iterable instance
    // const [foo] = 1;
    // const [foo] = false;
    // const [foo] = NaN;
    // const [foo] = undefined;
    // const [foo] = null;
    // const [foo] = {};

    const [s1, s2] = new Set(['a', 'b', 'c']);
    console.log('s1 ==', s1, 's2 ==', s2);
    //s1 == a s2 == b
    //对于set结构，可以使用数组的解构赋值
  }

  render() {
    return (
      <View style={{ flex:1, backgroundColor:'white', justifyContent:'center', alignItems:'center' }}>
        <Text style={{ fontSize:20 }}>
          C2S1
        </Text>
        <Text style={{ marginTop:10, color:'#333333' }}>
          变量的解构赋值 ~ 数组的解构
        </Text>
      </View>
    );
  }
}
