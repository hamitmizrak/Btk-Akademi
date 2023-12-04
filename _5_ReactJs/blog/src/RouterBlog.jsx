// rcc
// rfc

import React, { Component } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

class RouterBlog extends Component {
    render() {
        return (
            <div>
              <Header/> 
               <Main/>
               <Footer/>
            </div>
        );
    }
}

// EXPORT 
export default RouterBlog;