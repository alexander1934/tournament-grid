import React from 'react';
import './App.css';
import Header from "./components/Header";
import ThemeProvider from "./providers/themeProvider";

function App() {
    return (
        <ThemeProvider>
            <Header/>
        </ThemeProvider>
    )
}

export default App;
