import React from 'react';

export const CollapsedContext = React.createContext(true)
// 创建一个context对象. 当react 渲染一个订阅你这个context 对象的组件, 这个组件会从组件树中离自身最近的那个匹配Provider(Provider 接收一个 value 属性, 传递给消费组件. 一个Provider可以和多个消费组件有对应关系. 多个Provider 也可以嵌套使用, 里层的会覆盖外层的数据 --- 如:  <MyContext.Provider value={/* 某个值 */}>) 中读取的context 值.
