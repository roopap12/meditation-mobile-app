// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import MyRouter from './MyRouter'

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <MyRouter />
//       </React.StrictMode>
// );



import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import MyRouter from './MyRouter';

// Use createRoot instead of ReactDOM.render
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MyRouter />
  </React.StrictMode>
);
