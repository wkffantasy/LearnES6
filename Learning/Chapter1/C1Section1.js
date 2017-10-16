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

export default class C1S1 extends Component {

  componentWillMount() {
    console.log('C1S1 componentWillMount');
  }
  componentDidMount() {
    console.log('C1S1componentDidMount');
    // this._test1();
    // this._test2();
    // this._test3();
    // this._test4();
    this._test5();
  }
  _test5() {
    //es6不允许在相同的作用域内重复声明同一个变量
    function a() {
      const a = 10;
      // var a = 1;
    }
    //会直接报错
    //react native上报错是 duplicate declaration 'a',重复声明a
    //google浏览器的开发者工具上 报错是SyntaxError: Identifier 'a' has already been declared

    function b(c) {
      // let c = 10;
    }
    //直接报错 同上，所以 在函数内部，声明的变量不能和参数名一样
    function aaa(vv) {
      {
        const vv = 100;
      }
    }
    //上面这个不报错，不在同一个块级作用域内
  }
  _test4() {
    const tmp = '123';
    if (true) {
      tmp = 'abs';
      console.log('tmp ==', tmp);
      let tmp;
      console.log('tmp ==', tmp);
    }
    console.log('tmp ==', tmp);
    /*
    在react native中 打印顺序是 abs undefined  123
    但在google浏览器的开发者工具上 直接报错ReferenceError: tmp is not defined
    es6规定，如果在区块中存在let 和 const 命令，这个区块对这些命令声明的变量从一开始就形成封闭作用域
    所以，在let命令声明变量之前，该变量都是不可用的。称为‘暂时性死区’

     */
  }
  _test3() {
    console.log('c ==', c);
    let c = 10;
    console.log('d ==', d);
    let d = 5;
    typeof y;
    let y = 10;
    typeof x;
    let x = 10;
    /*
在react native中 我理解的都存在变量提升。
两者打印的都是 c == undefined d == undefined。而且在typeof命令下不会报错。下面没有用到

但是在google浏览器的开发者工具上 c == undefined，d就直接报错 ReferenceError。
typeof x; let x = 10; 直接ReferenceError
typeof y; var y = 10; 算是打印吧，会出现 number

所以，我们在rn中，变量一定要在声明后使用
     */
  }
  _test2() {
    const a = [];
    for (let i = 0; i < 10; i++) {
      a[i] = function () {
        console.log(i);
      };
    }
    a[6]();
    //打印是10

    const b = [];
    for (let i = 0; i < 10; i++) {
      a[i] = function () {
        console.log(i);
      };
    }
    console.log('b ==', b);
    //打印是6
    /*
说明var声明的，在全局范围内都有效。
而let声明的变量只能在块级的作用域内才有效
     */
  }
  _test1() {
    {
      var b = 1;
      const a = 10;
    }
    console.log('b ==', b);
    console.log('a ==', a);
    /*
es6新增了let命令，但是let所声明的变量只在let命令所在的代码块有效，比如上个代码，
打印的是b==1  下一个打印直接报错，a is not defined
所以for循环很适合let
for(let i = 0; i < 10; i++) {}
但是for循环如果用var,会有意外发生，
我们看test2方法
     */
  }
  render() {
    return (
      <View style={{ flex:1, backgroundColor:'white', justifyContent:'center', alignItems:'center' }}>
        <Text style={{ fontSize:20 }}>
          C1S1
        </Text>
        <Text style={{ marginTop:10, color:'#333333' }}>
          let and const
        </Text>
      </View>
    );
  }
}
