import React from "react";

import ReactDom from "react-dom/client";
import {FirstApp} from "./FirstApp.jsx";
// import {HelloWorldApp} from "./HelloWorldApp.jsx";
import './asset/style.css';
import {CounterApp} from "./CounterApp.jsx";


ReactDom.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      {/*<FirstApp title="Hola, soy Aarón" subTitle={1}/>*/}
      <CounterApp value={20}/>
    </React.StrictMode>
);

