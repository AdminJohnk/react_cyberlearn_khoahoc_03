import styled from "styled-components";

export const Link = ({ className, children }) => (
    <a className={className} href="#">
        {children}
    </a>
    
)

export const StyledLink = styled(Link)`
    background-color: red;
    color: white;
    padding: 15px 32px;
    text-align: center;
    font-size: 16px;
    margin: 4px 2px;
    font-weight: bold;
`;











