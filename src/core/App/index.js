import { useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { PersonalHomepage } from '../../features/PersonalHomepage';
import { GlobalStyle } from './GlobalStyle';
import { themeDark, themeLight } from '../../theme';
import { Normalize } from "styled-normalize";
import { selectIsDarkTheme } from '../../common/themeSlice';

function App() {
    const isDarkTheme = useSelector(selectIsDarkTheme);

    return (
        <ThemeProvider theme={isDarkTheme ? themeDark : themeLight}>
            <Normalize />
            <GlobalStyle />
            <PersonalHomepage />
        </ThemeProvider>
    );
};

export default App;