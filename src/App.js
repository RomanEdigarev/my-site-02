import React from 'react';
import Navbar from "./components/navbar/Navbar";
import {BrowserRouter as Router, Route} from "react-router-dom";
import GlobalStyle from "./globalStyles";

function App() {
    return (
        <Router>
            <GlobalStyle/>
            <Navbar/>
        </Router>
    );
}

export default App;
