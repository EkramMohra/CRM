import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'mobx-react';
import Clients from './stores/clients'

// let client1 = new client("5b9f48a2406b2cd74c55c663"
// ,"Perkins","Cunningham"
// ,"perkinscunningham@imant.com","B",
// "Emily Durham","Romania")
let c = new Clients()
// c.clients.push(client1)

const store={
  c
}


ReactDOM.render(
  <Provider {...store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
