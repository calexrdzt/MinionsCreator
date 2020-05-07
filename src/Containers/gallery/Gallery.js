import React from 'react';
import './Gallery.css';
import { MinionContext } from '../../Utiles/MinionContext';
import Minion from '../../Components/minion/Minion';
import Modal from 'react-modal';
import { minionsCol } from '../../Utiles/Firebase';
import { useHistory } from 'react-router-dom';

export const Gallery = () =>{

    const context = React.useContext(MinionContext);
    const history = useHistory();

    
    const handleClikc = () =>{
        console.log(context.list);
    }

    const handleBack = () =>{
      history.push('/');
    }

    
    const [open, setOpen] = React.useState(false);
    Modal.setAppElement('#root')
    
 //   {context.list.length === '0' &&  setOpen(true);}

    const handleMinionDelete = (id) =>{
        const index= context.list.findIndex((elem)=> {
          console.log('este es el id de el index : ' + elem.id + '  MiID ' );
          return elem.id;
        });
        
        console.log(context.list[index].id);  
        
        context.setList([
          ...context.list.slice(0,index),
          ...context.list.slice(index + 1)
          
        ]);
        
        minionsCol.doc(context.list[index].id).delete();

            console.log('Borrandooo Minion: ' + context.list[index].id);
    }


    const handleMinionEdit = (id) =>{
      const index= context.list.findIndex((elem)=> {
        console.log('este es el id de el index : ' + elem.id + '  MiID ' );
        return elem.id;
      });
      
      const min = context.list[index];

      context.setName (min.name);
      context.setBody (min.body);
      context.setHair (min.hair);
      context.setEyes (min.eyes);
      context.setMouth (min.mouth);
      context.setCloth (min.cloth);
     // context.setId (min.id);

      history.push('/create');

      console.log(context.list[index].body);

      // console.log(context.list[index].id);  
      
      // minionsCol.doc(context.list[index].id).delete();

          // console.log('Editando Minion: ' + context.list[index].id);
          console.log('Editando Minion: ');
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
                        id={minion.id}
                        onDelete={() => handleMinionDelete(index)}
                        onEdit={() => handleMinionEdit(index)}
                        width= '200px'
                        height='300px'
                        />
                })}

                {/* <button onClick={handleClikc}>consolog</button> */}
            </div>
            <button className="btnnext"
                        onClick={handleBack}>
                        Back
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
       
       > There is no one here</Modal>

    </div>
  );
}

export default Gallery;
