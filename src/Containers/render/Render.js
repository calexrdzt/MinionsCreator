import React from 'react';
import './Render.css';

import { useHistory } from 'react-router-dom';
import Minion from '../../Components/minion/Minion';
import { MinionContext } from '../../Utiles/MinionContext';
import { Redirect } from 'react-router-dom'
import db from '../../Utiles/Firebase';

export const Render = () =>{

    const context = React.useContext(MinionContext);
    const history = useHistory();

        
        {!(context.mouth && context.eyes && context.hair && context.cloth) && history.push('/name');}

        const [state, setState] = React.useState({
            on: 'false',
        });
      
        const handleButton = (ev) => {

            setState({
                on: !state.on,

            });


            {(state.on && context.body.includes('BodyA')) && context.setBody('BodyAM')}
            {(!state.on && context.body.includes('M')) && context.setBody('BodyA')}

            {(state.on && context.hair.includes('hairA')) && context.setHair('hairAM')}
            {(state.on && context.hair.includes('hairB')) && context.setHair('hairBM')}
            {(!state.on && context.hair.includes('M')) && context.setHair(context.listPrev[0].hair)}       
            
            {(state.on && context.eyes.includes('EyeA')) && context.setEyes('EyeAM')}
            {(state.on && context.eyes.includes('EyeB')) && context.setEyes('EyeBM')}
            {(!state.on && context.eyes.includes('M')) && context.setEyes(context.listPrev[0].eyes)}

            {(state.on && context.mouth.includes('mouthA')) && context.setMouth('mouthAM')}
            {(state.on && context.mouth.includes('mouthB')) && context.setMouth('mouthBM')}
            {(!state.on && context.mouth.includes('M')) && context.setMouth(context.listPrev[0].mouth)}

            {(state.on && context.cloth.includes('Cloth1')) && context.setCloth('Cloth1M')}
            {(state.on && context.cloth.includes('Cloth2')) && context.setCloth('Cloth2M')}
            {(state.on && context.cloth.includes('Cloth3')) && context.setCloth('Cloth3M')}
            {(state.on && context.cloth.includes('Cloth4')) && context.setCloth('Cloth4M')}
            {(state.on && context.cloth.includes('Cloth5')) && context.setCloth('Cloth5M')}

            {(!state.on && context.cloth.includes('M')) && context.setCloth(context.listPrev[0].cloth)}




        console.log('Cambio: ' + state.on );
            
        };



        const handleFinish = () =>{
            context.handleFinish();
            history.push('/');

        }

        const handleBack = () =>{
            history.push('/create');
          }

  return (
    <div className="App_render">

        <div className="render_square">

            <div className="render_squares">
            <Minion  
           name={context.name} 
           body={context.body} 
           hair={context.hair} 
           eyes={context.eyes} 
           mouth={context.mouth}
           cloth={context.cloth}/>
                <div className="options"> 
                    <h1 className="title_options">This is your Minion</h1>
                    
                    <div className="buttons">
                        <p className="render_text">Do you want to move to the purple side?</p>
                        {state.on && <button className="btn_Actived" onClick={handleButton}>Activar</button>}
                        {!state.on && <button className="btn_Active" onClick={handleButton}>Desactivar</button>}
                    </div>

                    <div className="btns_space">  

                        <button className="btnnext"
                        onClick={handleBack}>
                        Back
                        </button>

                        <button className="btnnext"
                        onClick={handleFinish}> 
                        Save
                        </button>
                    </div>
 
                </div>
            </div>


        </div>
    </div>
  );
}

export default Render;
