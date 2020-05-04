import React from 'react';
import './Name.css';
import { useHistory } from 'react-router-dom';
import { MinionContext } from '../Utiles/MinionContext';


export const Name = () => {



  const history = useHistory();
  const context = React.useContext(MinionContext);


  const handleClick = () => {
    history.push('/create');
  }

  const handleName = (ev) =>{
    context.setName(ev.target.value);
    console.log("Nombre: "+ context.name)
  }


  return (
    <div className="App">

    <h1 className="App_nameT">Choose a Name</h1>

      <label>Write a Name</label>
      <input 
      className="app_inputs"
      placeholder="Write a Name"
      value={context.name} 
      onChange={handleName}
      maxLength="10"
      ></input>

      <button className="app_btnstart" onClick={handleClick}>
      Next</button>

    </div>
  );
}

export default Name;
