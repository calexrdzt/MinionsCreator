import React from 'react';
import './Gallery.css';
import { MinionContext } from '../../Utiles/MinionContext';
import Minion from '../../Components/minion/Minion';

export const Gallery = () =>{

    const context = React.useContext(MinionContext);
    
    const handleClikc = () =>{
        console.log(context.list);
    }

  return (
    <div className="App_Gallery">

        <div className="gallery">
            <h1 className="gallery_tittle">Galleryyyy</h1>

            <div className="gallery_minios">
                {context.list.map(minion => {
                    return <Minion 
                        name={minion.name} 
                        body={minion.body} 
                        hair={minion.hair} 
                        eyes={minion.eyes} 
                        mouth={minion.mouth}
                        cloth={minion.cloth}
                        
                        />
                })}

                {/* <button onClick={handleClikc}>consolog</button> */}
            </div>

        </div>


    </div>
  );
}

export default Gallery;
