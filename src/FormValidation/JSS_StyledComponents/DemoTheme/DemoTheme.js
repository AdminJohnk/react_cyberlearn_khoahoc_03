import React, { Component } from 'react'
import styled, { ThemeProvider } from 'styled-components'

const configDarkTheme = {
    color: 'white',
    backgroundColor: 'black',
    fontSize: '20px',
}
const configLightTheme = {
    color: 'black',
    backgroundColor: 'pink',
    fontSize: '20px',
}

export default class DemoTheme extends Component {

    state = {
        currentTheme: configDarkTheme
    }

    handleChangeTheme = (event) => {
       this.setState({
              currentTheme: event.target.value === '1' ? configDarkTheme : configLightTheme
         })
    }

    render() {

        const DivStyle = styled.div`
            color: ${props => props.theme.color};
            padding: 1%;
            background-color: ${props => props.theme.backgroundColor};
            font-size: ${props => props.theme.fontSize};
            font-weight: ${props => props.theme.fontWeight};
        `

        return (
            <div>
                <ThemeProvider theme={this.state.currentTheme}>
                    <DivStyle>
                        Hello mình là yasuo thông thạo 7 !!!
                    </DivStyle>
                    <select onChange={this.handleChangeTheme}>
                        <option value="1">Dark theme</option>
                        <option value="2">Light theme</option>
                    </select>
                </ThemeProvider>
            </div>
        )
    }
}
