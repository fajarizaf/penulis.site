import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import axios from 'axios'
import { RecoilRoot } from 'recoil';

axios.defaults.withCredentials = true
axios.defaults.baseURL = 'https://node-penulis.herokuapp.com'

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <Suspense fallback={<div>Loading...</div>}>
        <App />
      </Suspense>
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById('root')
);

