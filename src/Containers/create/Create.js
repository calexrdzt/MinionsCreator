import React from 'react';
import './Create.css';
import { useHistory } from 'react-router-dom';

import Hair from '../../Components/Choose/Hair';
import Eyes from '../../Components/Choose/Eyes';
import Mouth from '../../Components/Choose/Mouth';
import Cloth from '../../Components/Choose/Cloth';
import Minion from '../../Components/minion/Minion'
import { MinionContext } from '../../Utiles/MinionContext';
import Modal from 'react-modal';


export const Create = () => {

    const context = React.useContext(MinionContext);
    const history = useHistory();

    const [open, setOpen] = React.useState(false);
    Modal.setAppElement('#root')


    const[state, setState]  = React.useState({
        idBtn: '',
      });


      const handleBack = () =>{
        history.push('/name');
      }


      const handleClick = () => {

        {
          (context.mouth && context.eyes && context.hair && context.cloth)
          && history.push('/render');
        } setOpen(true);

        context.setListPrev([
          {
            name: context.name,
            body: context.body,
            hair: context.hair,
            eyes: context.eyes,
            mouth: context.mouth,
            cloth: context.cloth,
            id: context.name + context.body + context.hair + context.eyes + context.mouth + context.cloth,
          }
        ]);

        
      }


    const getId = (e) =>{
       const idBtn= e.target.id;
       setState({
        idBtn: idBtn,
        });
        console.log(idBtn);
    }


    {!(context.name) && history.push('/name');}

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
        {state.idBtn==="" && <Hair/>}
        {state.idBtn==="Eyes" && <Eyes/>}
        {state.idBtn==="Hair" && <Hair/>}
        {state.idBtn==="Cloth" && <Cloth/>}
        {state.idBtn==="Mouth" && <Mouth/>}

        <div className="btns_space">  

            <button className="app_btnnext"
            onClick={handleBack}>
            Back
            </button>

            <button className="app_btnnext"
            onClick={handleClick}> 
            Next
            </button>
        </div>
        </div>
        
        </div>

      </div>
      
      </div>

      <Modal isOpen={open} onRequestClose={()=> setOpen(false)}
        style={
          {
            overlay:{
              

            },
            content:{
              backgroundColor:'rgba(233,116,25,1)',
              border: 'none',
              margin: 'auto',
              width: '300px',
              height: '35px',
              borderRadius: '50px',
              color: 'white',
              fontSize: '1.3em',
   
            }
          }

        }
       
       > You are missing some elements </Modal>
    
    </div>
  );
}

export default Create;
