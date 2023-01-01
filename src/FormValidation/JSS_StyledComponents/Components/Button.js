import styled from 'styled-components';

export const StyleButton = styled.button`
    background-color: ${props => props.bgPrimary ? 'blue' : 'red'};
    color: white;
    padding: 15px 32px;
    text-align: center;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
    font-weight: bold;
    border-radius: 12px;
    border: none;
`;

export const SmallButton = styled(StyleButton)`
    font-size: 12px;
    padding: 10px 15px;
    background-color: orange;
`;






