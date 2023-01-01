import React, { Component } from 'react'
import { StyleButton, SmallButton } from '../Components/Button'
import { Link, StyledLink } from '../Components/Link'
import { TextField } from '../Components/TextField'


export default class DemoJSS extends Component {
  render() {
    return (
      <div>
        <StyleButton className='button_style' bgPrimary>Chí Kiên</StyleButton>
        <SmallButton className='button_style' bgPrimary>Chí Kiên</SmallButton>

        <TextField textColor="blue"/>
      </div>
    )
  }
}
