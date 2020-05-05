import React from 'react';
import './Create.css';
import { useHistory } from 'react-router-dom';

import Hair from '../../Components/Choose/Hair';
import Eyes from '../../Components/Choose/Eyes';
import Mouth from '../../Components/Choose/Mouth';
import Cloth from '../../Components/Choose/Cloth';
import Minion from '../../Components/minion/Minion'
import { MinionContext } from '../../Utiles/MinionContext';


export const Create = () => {

    const context = React.useContext(MinionContext);
    const history = useHistory();

    const[state, setState]  = React.useState({
        id: '',
      });


      const handleClick = () => {

        {
          (context.mouth && context.eyes && context.hair && context.cloth)
          && history.push('/render');
        }

        context.setListPrev([
          {
            name: context.name,
            body: context.body,
            hair: context.hair,
            eyes: context.eyes,
            mouth: context.mouth,
            cloth: context.cloth,
          }
        ]);

        
      }


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
        
       <Minion  
           name={context.name} 
           body={context.body} 
           hair={context.hair} 
           eyes={context.eyes} 
           mouth={context.mouth}
           cloth={context.cloth}/>

        <div className="options">

        <div className="options-buttons">
          <button className="options-button" id="Hair" onClick={getId} style ={{backgroundImage: 'url(./images/icons/hair.png)' }}></button>
          <button className="options-button" id="Eyes" onClick={getId} style ={{backgroundImage: 'url(./images/icons/eye.png)' }}></button>
          <button className="options-button" id="Mouth" onClick={getId} style ={{backgroundImage: 'url(./images/icons/mouth.png)' }}></button>
          <button className="options-button" id="Cloth" onClick={getId} style ={{backgroundImage: 'url(./images/icons/cloth.png)' }}></button>
        </div>

        <div className="options-next">
        {state.id==="" && <Hair/>}
        {state.id==="Eyes" && <Eyes/>}
        {state.id==="Hair" && <Hair/>}
        {state.id==="Cloth" && <Cloth/>}
        {state.id==="Mouth" && <Mouth/>}

        <button className="app_btnnext"
        onClick={handleClick}
        > Next</button>
        </div>
        
        </div>

      </div>
      
      </div>
    
    </div>
  );
}

export default Create;
