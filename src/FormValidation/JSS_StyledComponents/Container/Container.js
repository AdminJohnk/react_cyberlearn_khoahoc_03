import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    margin: auto;
    border: 3px solid ${props => props.theme.borderButton};
    background-color: ${props => props.theme.backgroundColor};
    color: ${props => props.theme.color};
    border-radius: ${props => props.theme.borderRadiusButton};
    &:hover{
        background-color: ${props => props.theme.hoverBackgroundColor};
        color: ${props => props.theme.hoverTextColor};
    }
`


