import React from "react";
import  ReactDOM from "react-dom";
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { ContextProvider } from "./contexts/ContextProvider";
// ReactDOM.render(<ContextProvider>
//     <App/>
// </ContextProvider>,document.getElementById('root'));

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<ContextProvider>
    <App/>
</ContextProvider>);