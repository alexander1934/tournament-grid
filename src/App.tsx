import React from 'react';
import './App.css';
import Header from "./components/Header";
import ThemeProvider from "./providers/themeProvider";
import Footer from "./components/Footer/Footer";

function App() {
    return (
        <ThemeProvider>
            <div className="min-h-screen flex flex-col">
                <Header/>
                <main className="flex flex-auto flex-col">
                </main>
                <Footer/>
            </div>
        </ThemeProvider>
    )
}

export default App;
