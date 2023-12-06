import React from 'react';
import ReactDOM from 'react-dom/client';

// index.css
import './index.css';

import reportWebVitals from './reportWebVitals';

// RouterBlog
import RouterBlog from './RouterBlog';

// dark mode
import './index.css';

// Router
// BrowserRouter ==> http://localhost:3000/
// HashRouter    ==> http://localhost:3000/#/
import { BrowserRouter } from 'react-router-dom';

// Dil Secenegi
import './internationalization/i18nlanguage';

// ROOT
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
        <RouterBlog/>
    </BrowserRouter>
    
  </React.StrictMode>
);


reportWebVitals();
