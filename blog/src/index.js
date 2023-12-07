import React from 'react';
import ReactDOM from 'react-dom/client';

// index.css
import './index.css';

import reportWebVitals from './reportWebVitals';

// RouterBlog
import RouterBlog from './RouterBlog';

// dark mode
import './index.css';

// Dil Secenegi
import './internationalization/i18nlanguage';

// Router
// BrowserRouter ==> http://localhost:3000/
// HashRouter    ==> http://localhost:3000/#/
import { BrowserRouter } from 'react-router-dom';

import App from './App';

// ROOT
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
        <RouterBlog/>
        {/* <App /> */}
    </BrowserRouter>
    
  </React.StrictMode>
);


reportWebVitals();
