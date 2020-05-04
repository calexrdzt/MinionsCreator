import React from 'react';
import './App.css'; 

import {BrowserRouter as Router, Route} from 'react-router-dom';

import Name from '../name/Name';
import Create from '../create/Create';
import Main from  '../main/Main';
import { MinionContext } from '../Utiles/MinionContext';


export const App = () => {

  const [name, setName] = React.useState('Minionsito');
  const [hair, setHair] = React.useState('');
  const [eyes, setEyes] = React.useState('');
  const [mouth, setMouth] = React.useState('');
  const [cloth, setCloth] = React.useState('');
  
  

  const value ={
    name: name,
    setName: setName,

    hair: hair,
    setHair: setHair,

    eyes: eyes,
    setEyes: setEyes,

    mouth: mouth,
    setMouth: setMouth,

    cloth: cloth,
    setCloth: setCloth,
  }

  return (


    <div className="App">

    <MinionContext.Provider value={value}> 

     
    <Router>
      <Route path="/" exact component={Main} />
      <Route path="/name" exact component={Name}/>
      <Route path="/create" exact component={Create}/>

    </Router>
    </MinionContext.Provider>

    </div>
    );
}

export default App;
