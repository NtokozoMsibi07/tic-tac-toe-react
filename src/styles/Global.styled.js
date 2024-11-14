import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        background-color: yellow;
        font-family: "Poppins", sans-serif;
        ${(props) => props.theme.media.mobile}
        font-size: 12px;
    }

    body {
        background-color: ${(props) => props.theme.colors.primary};
    }
`;