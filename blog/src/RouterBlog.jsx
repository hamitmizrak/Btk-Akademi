// rcc
// rfc

import React, { Component } from 'react';

// ROUTER
import { Navigate, Route, Routes } from 'react-router-dom'
import { withTranslation } from 'react-i18next';

// Header, Main, Footer
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import App from './App';


// CLASS
class RouterBlog extends Component {
    render() {
        return (
            // dark mode: App 
            <div className="App">

                {/* HEADER */}
                <Header logo="fa-brands fa-salesforce" />

                {/* ROUTING */}
                {/* dark mode */}
                {/* dark mode:App-header */}
                <div className="container mt-5 App-header" style={{ marginTop: "4rem" }}>
                    <Routes>
                        {/* index and root path */}
                        <Route path={"/"} element={<Main />} />
                        <Route path={"/index"} element={<Main />} />

                        {/* Bad Request */}
                        {/*OTHER PATH*/}
                        <Route path={"*"} element={<Navigate to="/" />} />
                    </Routes>
                </div>
                <Footer />
            </div>
        );// end return 
    }// end render 
}// end class 

// EXPORT 
// Wrapper Higher ORder Component (i18n)
export default withTranslation()(RouterBlog);