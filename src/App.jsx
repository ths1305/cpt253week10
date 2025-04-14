import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { lightTheme, darkTheme } from './theme';

import Footer from './components/footer';
import Header from './components/header';
import LandingPage from './components/landingpage';
import ProfilePage from './components/profilepage';

const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
    color: ${({ theme }) => theme.text};
    background-color: ${({ theme }) => theme.background};
    font-family: "Verdana", sans-serif;
    transition: all 0.3s ease;
  };
`;

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Router>
        <Header toggleTheme={() => setIsDarkMode(prev => !prev)} />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
};

export default App;
