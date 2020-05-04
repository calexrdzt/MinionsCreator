import React, { useContext } from 'react';
import './Minion.css';
import { MinionContext } from '../Utiles/MinionContext';
import { match } from 'minimatch';


export const Minion = () => {

  const context = React.useContext(MinionContext);

  return (

        <div className="minion">
       {/* {match.Params.id ==="create" && }  */}
       <h2 className="minion-name" >{context.name}</h2>
            <div className="minion_content-img" >
              <div className="minion_content-hair" style ={{backgroundImage: 'url(./images/' + context.hair + '.png)' }}></div>
              <div className="minion_content-eye" style ={{backgroundImage: 'url(./images/' + context.eyes + '.png)' }}></div>
              <div className="minion_content-mouth" style ={{backgroundImage: 'url(./images/' + context.mouth + '.png)' }}></div>
              <div className="minion_content-cloth" style ={{backgroundImage: 'url(./images/' + context.cloth + '.png)' }}></div>
            </div>
        </div>

  );
}

export default Minion;
