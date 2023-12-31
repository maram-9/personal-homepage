import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
    }
    
    *, ::after, ::before {
        box-sizing: inherit;
    }

    body {
        font-family: 'Inter', sans-serif;
        transition: background 0.3s;
        background: ${({ theme }) => theme.colors.site.background};
        color: ${({ theme }) => theme.colors.site.text};
        font-size: 18px;
        letter-spacing: 0.05em;
        word-break: breake-word;
        overflow-y: scroll;
        padding-bottom: 100px;

        @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
            padding-bottom: 30px;
        }
    }
    button {
    cursor: pointer;
    }
`;