import React from 'react';
import Navbar from "./components/navbar/Navbar";
import {BrowserRouter as Router, Route} from "react-router-dom";
import GlobalStyle from "./globalStyles";
import Home from "./pages/home/Home";
import Footer from "./components/footer/Footer";
import Services from "./pages/services/Services";
import Products from "./pages/products/Products";
import SignUp from "./pages/signUp/SignUp";
import ScrollToTop from "./components/ScrollToTop";

function App() {
    return (
        <Router>
            <GlobalStyle/>
            <Navbar/>
            <Route path={'/'} exact><Home/></Route>
            <Route path={'/services'}><Services/></Route>
            <Route path={'/products'}><Products/></Route>
            <Route path={'/sign-up'}><SignUp/></Route>
            <Footer/>
            <ScrollToTop></ScrollToTop>
        </Router>
    );
}

export default App;
