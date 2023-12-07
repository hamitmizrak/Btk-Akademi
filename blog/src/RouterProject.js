// React
import React, { Component, createContext, useState } from 'react';

// Header, Main, Footer
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

// Router
import { Navigate, Route, Routes } from 'react-router-dom';
import { withTranslation } from 'react-i18next';



// Router Class
function RouterProject({ t }) {
    // Display Name
    // static displayName = "RouterProject";

    // RETURN
    return (
            <div className="App">
                {/* HEADER */}
                <Header logo="fa-solid fa-cloud"></Header>

                {/* ROUTING */}
                {/* dark mode */}
                {/* dark mode:App-header */}
                <div className='container mt-5 App-header'>
                    <Routes>
                        {/* ROOT */}
                        {/* <Route exact={true} path="/" /> */}
                        <Route path="/" element={<Main />} />
                        <Route path="/index" element={<Main />} />

                     
                        {/*OTHER PATH*/}
                        <Route path={"*"} element={<Navigate to={"/"} />} />
                    </Routes>
                </div>
                {/* FOOTER */}
                <Footer  copy="&copy; Bütün haklar saklıdır"></Footer>
            </div>
    ); //end return
} // end class 

// Export
// Wrapper Higher ORder Component (i18n)
export default withTranslation()(RouterProject);