import React from 'react';
import './Gallery.css';
import { MinionContext } from '../../Utiles/MinionContext';
import Minion from '../../Components/minion/Minion';
import Modal from 'react-modal';

export const Gallery = () =>{

    const context = React.useContext(MinionContext);
    
    const handleClikc = () =>{
        console.log(context.list);
    }

    
    const [open, setOpen] = React.useState(false);
    Modal.setAppElement('#root')
    
 //   {context.list.length === '0' &&  setOpen(true);}

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
            <h1 className="gallery_tittle">These are your Minions</h1>

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
                        width= '200px'
                        height='300px'
                        />
                })}

                {/* <button onClick={handleClikc}>consolog</button> */}
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
       
       > There is no one here</Modal>

    </div>
  );
}

export default Gallery;
