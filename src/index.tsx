import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Youkoso from './components/Youkoso';
import Name from './components/Name';
import Message from './components/Message';
import ContainerSample from './components/ContainerSample';
import ContextSample from './components/ContextSample';
import Counter from './components/Counter';
import CounterReducer from './components/CounterReducer';
import { Parent } from './components/Parent';
import { ParentKai } from './components/ParentKai';
import {ParentKaiCallback} from './components/ParentKaiCallback'
import {UseMemoSample} from './components/UseMemoSample'
import {Clock} from './components/Clock'
import FookDayo from './componetnsVer2/FookDayo'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    {/* <Clock /> */}
    <FookDayo />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
