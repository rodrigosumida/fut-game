import styled, { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: none;
        box-sizing: border-box;
    }

    body {
        height: 100vh;
        background-color: #77878B
    }

    a {
        text-decoration: none;
    }
`;

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;

export const BarraVertical = styled.div`
    width: 1px;
    height: 90%;
    background-color: #B7D5D4;
`;