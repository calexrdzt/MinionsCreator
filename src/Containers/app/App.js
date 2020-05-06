import React from 'react';
import './App.css'; 

import {HashRouter as Router, Route} from 'react-router-dom';

import Name from '../name/Name';
import Create from  '../create/Create';
import Main from  '../main/Main';
import Render from '../render/Render'
import Gallery from '../gallery/Gallery';
import { MinionContext } from '../../Utiles/MinionContext';
import db, { minionsCol, usersCol} from '../../Utiles/Firebase';


export const App = () => {

  const [name, setName] = React.useState('');
  const [body, setBody] = React.useState('BodyA');
  const [hair, setHair] = React.useState('');
  const [eyes, setEyes] = React.useState('');
  const [mouth, setMouth] = React.useState('');
  const [cloth, setCloth] = React.useState('');
  
  const [list, setList ] = React.useState([]);
  const [listPrev, setListPrev ] = React.useState([]);

  const [loaded, setLoaded] = React.useState(false);

  React.useEffect(()=>{
    // const listString = localStorage.getItem('list');
    // if(listString !== null){
    //   setList(JSON.parse(listString));
    // }
    // console.log('Leyendo lista: '+ listString);

     usersCol.doc('Calex').get().then(function(doc) {
      if (doc.exists && doc.data().list) {
        setList(doc.data().list);
          console.log("Document data:", doc.data());
      } 
      setLoaded(true);
      }).catch(function(error) {
          console.log("Error getting document:", error);
      });



  }, []);


  React.useEffect(() =>{
    // console.log('Seteando List: '+ list);
    // localStorage.setItem('list', JSON.stringify(list))

    if(loaded === true){
      usersCol.doc('Calex').set({
        list: list,
      });

    }


  },[list, loaded])


  

  
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

    handleFinish: handleFinish,

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
