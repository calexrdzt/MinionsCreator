import React from 'react';
import './Options.css';
import { MinionContext } from '../Utiles/MinionContext';

export const Hair = () => {

  const context = React.useContext(MinionContext);

  const handleHair = (ev) =>{

    const url = ev.target.style.backgroundImage;
    const bI = url.split('/');
    const img = bI[3].split('.');

    context.setHair(img[0])  
  
  }

  return (
      
    <div className="App_options">

    <h1 className="title_options">Choose the hair</h1>

      <div className="options-one" >
          <div className="optionsA" onClick={handleHair} style ={{backgroundImage: 'url(./images/icons/hairA1.png)', }}></div>
          <div className="optionsA" onClick={handleHair} style ={{backgroundImage: 'url(./images/icons/hairA2.png)', }}></div>
          <div className="optionsA" onClick={handleHair} style ={{backgroundImage: 'url(./images/icons/hairB1.png)', }}></div>
          <div className="optionsA" onClick={handleHair} style ={{backgroundImage: 'url(./images/icons/hairB2.png)', }}></div>
          <div className="optionsA" onClick={handleHair} style ={{backgroundImage: 'url(./images/icons/hairB3.png)', }}></div>
          
      </div>


    
    </div>
  );
}

export default Hair;