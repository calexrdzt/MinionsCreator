import React from 'react';
import './Options.css';
import { MinionContext } from '../Utiles/MinionContext';

export const Mouth = () => {

  const context = React.useContext(MinionContext);

  const handleMouth = (ev) =>{

    const url = ev.target.style.backgroundImage;
    const bI = url.split('/');
    const img = bI[3].split('.');

    context.setMouth(img[0])
  console.log(img[0]);

  }

  return (
      
    <div className="App_options">

    <h1 className="title_options">Choose the Mouth</h1>

      <div className="options-one" >
          <div className="optionsA" onClick={handleMouth} style ={{backgroundImage: 'url(./images/icons/mouthA1.png)', }}></div>
          <div className="optionsA" onClick={handleMouth} style ={{backgroundImage: 'url(./images/icons/mouthA2.png)', }}></div>
          <div className="optionsA" onClick={handleMouth} style ={{backgroundImage: 'url(./images/icons/mouthA3.png)', }}></div>
          <div className="optionsA" onClick={handleMouth} style ={{backgroundImage: 'url(./images/icons/mouthB1.png)', }}></div>
          <div className="optionsA" onClick={handleMouth} style ={{backgroundImage: 'url(./images/icons/mouthB2.png)', }}></div>
      </div>
    
    </div>
  );
}

export default Mouth;