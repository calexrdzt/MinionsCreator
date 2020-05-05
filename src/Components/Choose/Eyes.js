import React from 'react';
import './Options.css';
import { MinionContext } from '../../Utiles/MinionContext';

export const Eyes = () => {

  const context = React.useContext(MinionContext);

  const handleEyes = (ev) =>{

    const url = ev.target.style.backgroundImage;
    const bI = url.split('/');
    const img = bI[3].split('.');

    context.setEyes(img[0])
  console.log(img[0]);

  }


  return (
      
    <div className="App_options">

    <h1 className="title_options">Choose the eyes</h1>

      <div className="options-one" >
          <div className="optionsA" onClick={handleEyes} style ={{backgroundImage: 'url(./images/icons/EyeA1.png)', }}></div>
          <div className="optionsA" onClick={handleEyes} style ={{backgroundImage: 'url(./images/icons/EyeA2.png)', }}></div>
          <div className="optionsA" onClick={handleEyes} style ={{backgroundImage: 'url(./images/icons/EyeB1.png)', }}></div>
          <div className="optionsA" onClick={handleEyes} style ={{backgroundImage: 'url(./images/icons/EyeB2.png)', }}></div>

      </div>


    
    </div>
  );
}

export default Eyes;
