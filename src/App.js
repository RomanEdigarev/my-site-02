import React from 'react';
import Navbar from "./components/navbar/Navbar";
import {BrowserRouter as Router, Route} from "react-router-dom";
import GlobalStyle from "./globalStyles";
import Home from "./pages/home/Home";

function App() {
    return (
        <Router>
            <GlobalStyle/>
            <Navbar/>
            <Route path={'/'} exact><Home/></Route>
        </Router>
    );
}

export default App;
