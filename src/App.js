import React, { Component } from 'react'
import UserProfile from './FormValidation/UserProfile/UserProfile'
import DemoJSS from './FormValidation/JSS_StyledComponents/DemoJSS/DemoJSS'
import  DemoTheme  from './FormValidation/JSS_StyledComponents/DemoTheme/DemoTheme'
import TodoList from './FormValidation/JSS_StyledComponents/BaiTapToDoList/TodoList/TodoList'
import UseState from './FormValidation/Hooks/UseState'


export default class App extends Component {
  render() {
    return (
      <div>
        {/* <UserProfile/> */}
        {/* <DemoJSS/> */}
        {/* <DemoTheme/> */}
        {/* <TodoList/> */}
        <UseState/>
      </div>
    )
  }
}
