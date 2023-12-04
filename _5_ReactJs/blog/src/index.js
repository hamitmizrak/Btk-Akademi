import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';

// Router
import RouterBlog from './RouterBlog';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterBlog/>
  </React.StrictMode>
);


reportWebVitals();
