import React from 'react';
import './App.css'; 

import {BrowserRouter as Router, Route} from 'react-router-dom';

import Name from '../name/Name';
import Create from  '../create/Create';
import Main from  '../main/Main';
import Render from '../render/Render'
import { MinionContext } from '../../Utiles/MinionContext';
import Gallery from '../gallery/Gallery';


export const App = () => {

  const [name, setName] = React.useState('Minionsito');
  const [body, setBody] = React.useState('BodyA');
  const [hair, setHair] = React.useState('');
  const [eyes, setEyes] = React.useState('');
  const [mouth, setMouth] = React.useState('');
  const [cloth, setCloth] = React.useState('');
  
  const [list, setList ] = React.useState([]);
  const [listPrev, setListPrev ] = React.useState([]);

  React.useEffect(()=>{
    const listString = localStorage.getItem('list');
    if(listString !== null){
      setList(JSON.parse(listString));
    }

    console.log('Leyendo lista: '+ listString);
  }, []);


  React.useEffect(() =>{
    console.log('Seteando List: '+ list);
    localStorage.setItem('list', JSON.stringify(list))
  },[list])

  
  const handleFinish = () =>{
    setList([
      ...list,
      {
        name: name,
        body:body,
        hair: hair,
        eyes: eyes,
        mouth: mouth,
        cloth: cloth,
      },
    ]);


      setName('');
      setBody('BodyA');
      setHair('');
      setEyes('');
      setMouth('');
      setCloth('');

  console.log('Se agrego a la listaa' + '   Lista de minions:  ' + eyes);
  }


  const value ={
    name: name,
    setName: setName,

    body: body,
    setBody: setBody,

    hair: hair,
    setHair: setHair,

    eyes: eyes,
    setEyes: setEyes,

    mouth: mouth,
    setMouth: setMouth,

    cloth: cloth,
    setCloth: setCloth,

    list: list,
    setList: setList,

    listPrev: listPrev,
    setListPrev: setListPrev,

    handleFinish: handleFinish

  }

  

  return (


    <div className="App">

    <MinionContext.Provider value={value}> 

     
    <Router>
      <Route path="/" exact component={Main} />
      <Route path="/name" exact component={Name}/>
      <Route path="/create" exact component={Create}/>
      <Route path="/render" exact component={Render}/>
      <Route path="/gallery" exact component={Gallery}/>

    </Router>
    </MinionContext.Provider>

    </div>
    );
}

export default App;