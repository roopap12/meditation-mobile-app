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
import ReactDOM from 'react-dom';
import './index.css';
import MyRouter from './MyRouter';

ReactDOM.render(
  <React.StrictMode>
    <MyRouter />
  </React.StrictMode>,
  document.getElementById('root')
);
