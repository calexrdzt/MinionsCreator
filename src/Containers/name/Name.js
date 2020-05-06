import React from 'react';
import './Name.css';
import { useHistory } from 'react-router-dom';
import { MinionContext } from '../../Utiles/MinionContext';
import Modal from 'react-modal';


export const Name = () => {


  const history = useHistory();
  const context = React.useContext(MinionContext);

  const [open, setOpen] = React.useState(false);
  Modal.setAppElement('#root')


  const handleBack = () =>{
    history.push('/');
  }

  const handleClick = (ev) => {

    {context.name.length > 3 &&
      history.push('/create');
    }
    setOpen(true);

    console.log(context.name.length);
  }

  const handleName = (ev) =>{
    context.setName(ev.target.value);
    console.log("Nombre: "+ context.name)
  }


  return (
    <div className="App_name">

    <h1 className="App_nameT">Choose a Name</h1>

      <label>Write a Name</label>
      <input 
        className="app_inputs"
        placeholder="Write a Name"
        value={context.name} 
        onChange={handleName}
        maxLength="10"
      ></input>


      <div className="btns_space">  

            <button className="app_btnstart"
            onClick={handleBack}>
            Back
            </button>

            <button className="app_btnstart"
            onClick={handleClick}> 
            Next
            </button>
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
       
       > Your Minion's name is too short</Modal>


    </div>
  );
}

export default Name;
