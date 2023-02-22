import './App.css';
import { observer, inject } from 'mobx-react'
import NavBar from './components/NavBar/NavBar';
import Container from './components/container/Container'
import React, { useEffect } from 'react';

function App(props) {

  useEffect( ()=>{
    props.c.storeClient()
  })

  return (

    <div className="App">

      <NavBar />
      <Container />
    </div>
  );
}


export default inject("c")(observer(App))
