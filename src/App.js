import React from 'react';
import Navbar from "./components/navbar/Navbar";
import {BrowserRouter as Router, Route} from "react-router-dom";
import GlobalStyle from "./globalStyles";
import Home from "./pages/home/Home";
import Footer from "./components/footer/Footer";

function App() {
    return (
        <Router>
            <GlobalStyle/>
            <Navbar/>
            <Route path={'/'} exact><Home/></Route>
            <Footer/>
        </Router>
    );
}

export default App;
