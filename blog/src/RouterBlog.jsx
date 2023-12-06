// rcc
// rfc

import React, { Component } from 'react';

// ROUTER
import { Navigate, Route, Routes } from 'react-router-dom'

// Header, Main, Footer
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

// CLASS
class RouterBlog extends Component {
    render() {
        return (
            <React.Fragment>
                <Header logo="fa-brands fa-salesforce" />

                <div class="container" style={{ marginTop: "4rem" }}>
                    <Routes>
                        {/* index and root path */}
                        <Route path={"/"} element={<Main />} />
                        <Route path={"/index"} element={<Main />} />

                        {/* Bad Request */}
                        <Route path={"*"} element={<Navigate to="/" />} />
                    </Routes>
                </div>
                <Footer />
            </React.Fragment>
        );
    }
}

// EXPORT 
export default RouterBlog;