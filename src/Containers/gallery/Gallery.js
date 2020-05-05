import React from 'react';
import './Gallery.css';
import { MinionContext } from '../../Utiles/MinionContext';
import Minion from '../../Components/minion/Minion';

export const Gallery = () =>{

    const context = React.useContext(MinionContext);
    
    const handleClikc = () =>{
        console.log(context.list);
    }

    const handleMinionDelete = (index) =>{
        // const index= context.list.findIndex((elem)=> {
            //     return elem.index === ind;
            // });
            context.setList([
                ...context.list.slice(0,index),
                ...context.list.slice(index + 1)
                
            ]);
            console.log('Borrandooo Minion: ' + index);
    }

  return (
    <div className="App_Gallery">

        <div className="gallery">
            <h1 className="gallery_tittle">Galleryyyy</h1>

            <div className="gallery_minios">
                {context.list.map((minion, index) => {
                    return <Minion 
                        name={minion.name} 
                        body={minion.body} 
                        hair={minion.hair} 
                        eyes={minion.eyes} 
                        mouth={minion.mouth}
                        cloth={minion.cloth}
                        onDelete={() => handleMinionDelete(index)}
                        />
                })}

                {/* <button onClick={handleClikc}>consolog</button> */}
            </div>

        </div>


    </div>
  );
}

export default Gallery;
