import React from 'react';
import './Create.css';

import Eyes from '../Choose/Eyes';
import Minion from '../minion/Minion'
import Hair from '../Choose/Hair';
import Mouth from '../Choose/Mouth';
import Cloth from '../Choose/Cloth';
import { MinionContext } from '../Utiles/MinionContext';

export const Create = () => {

    const context = React.useContext(MinionContext);

    const[state, setState]  = React.useState({
        id: '',
      });




    const getId = (e) =>{
       const id= e.target.id;
       setState({
           id: id,
        });
        console.log(id);
    }



  return (

    <div className="App_create">



      <div className="create_content-square">

      <div className="create_squares">
        
       <Minion/>

        <div className="options">

        <div className="options-buttons">
          <button className="options-button" id="Hair" onClick={getId}>1</button>
          <button className="options-button" id="Eyes" onClick={getId}>2</button>
          <button className="options-button" id="Mouth" onClick={getId}>3</button>
          <button className="options-button" id="Cloth" onClick={getId}>4</button>
        </div>

        <div className="options-next">
        {state.id==="" && <Hair/>}
        {state.id==="Eyes" && <Eyes/>}
        {state.id==="Hair" && <Hair/>}
        {state.id==="Cloth" && <Cloth/>}
        {state.id==="Mouth" && <Mouth/>}

        <button className="app_btnnext"> Next</button>
        </div>
        
        </div>

      </div>
      
      </div>
    
    </div>
  );
}

export default Create;
