import React from 'react';
import './Options.css';
import { MinionContext } from '../Utiles/MinionContext';

export const Cloth = () => {

  const context = React.useContext(MinionContext);

  const handleCloth = (ev) =>{

    const url = ev.target.style.backgroundImage;
    const bI = url.split('/');
    const img = bI[3].split('.');

    context.setCloth(img[0])
  console.log(img[0]);

  }




  return (
      
    <div className="App_options">

    <h1 className="title_options">Choose the clothes</h1>

      <div className="options-one" >

          <div className="optionsA" onClick={handleCloth} style ={{backgroundImage: 'url(./images/icons/Cloth1.png)', }}></div>
          <div className="optionsA" onClick={handleCloth} style ={{backgroundImage: 'url(./images/icons/Cloth2.png)', }}></div>
          <div className="optionsA" onClick={handleCloth} style ={{backgroundImage: 'url(./images/icons/Cloth3.png)', }}></div>
          <div className="optionsA" onClick={handleCloth} style ={{backgroundImage: 'url(./images/icons/Cloth4.png)', }}></div>
          <div className="optionsA" onClick={handleCloth} style ={{backgroundImage: 'url(./images/icons/Cloth5.png)', }}></div>

      </div>
    
    </div>
  );
}

export default Cloth;
