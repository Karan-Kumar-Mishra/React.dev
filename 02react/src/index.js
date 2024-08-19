import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

function Myapp()
{
  return(
    <h1>
      My custom app
    </h1>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    //App()
    Myapp()
);
