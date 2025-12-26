// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/js/bootstrap.bundle.js';
// import 'bootstrap-icons/font/bootstrap-icons.css';


// createRoot(document.getElementById('root')).render(

//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
  
// )

// import React from 'react'
// import { createRoot } from 'react-dom/client'
// import { BrowserRouter } from 'react-router-dom'
// import App from './App.jsx'

// import './index.css'
// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/js/bootstrap.bundle.js';
// import 'bootstrap-icons/font/bootstrap-icons.css';

// createRoot(document.getElementById('root')).render(

//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
  
// )
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import {AppContextProvider} from './context/AppContext.jsx';

// ✅ Bootstrap setup (your original)
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import 'bootstrap-icons/font/bootstrap-icons.css';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <AppContextProvider>
    <App />
    </AppContextProvider>
  </BrowserRouter>
);
