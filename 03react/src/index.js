import React, { Children } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
const anotherElement="Google.com";
const reactElement=React.createElement(
  'a',
  {href:'https://www.google.com',target:"_blank"},
  anotherElement
)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    //App()
  //  Myapp()
    reactElement
);
