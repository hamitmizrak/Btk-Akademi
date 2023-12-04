// rcc
// rfc

import React, { Component } from 'react';

// Header, Main, Footer
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

class RouterBlog extends Component {
    render() {
        return (
            <React.Fragment>
              <Header/> 
              <div class="container" style={{marginTop:"4rem"}}>
              <Main/>
              </div>
               <Footer/>
            </React.Fragment>
        );
    }
}

// EXPORT 
export default RouterBlog;