import React from 'react';
import './App.css';
import Header from "./components/Header";
import ThemeProvider from "./providers/themeProvider";
import Footer from "./components/Footer/Footer";
import {Provider} from "react-redux";
import store from "./store"
import MainContent from "./components/MainContent/MainContent";

function App() {
    return (
        <Provider store={store}>
            <ThemeProvider>
                <div className="min-h-screen flex flex-col">
                    <Header/>
                    <main className="flex flex-auto justify-center items-center h-full">
                        <MainContent/>
                    </main>
                    <Footer/>
                </div>
            </ThemeProvider>
        </Provider>
    )
}

export default App;
