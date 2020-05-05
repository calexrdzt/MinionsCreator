import React from 'react';
import './Minion.css';
import PropTypes from 'prop-types';
import { MinionContext } from '../../Utiles/MinionContext';


export const Minion = ({body, name, hair, eyes, mouth, cloth, onDelete}) => {
 
  const context = React.useContext(MinionContext);

  return (

        <div className="minion">
       <h2 className="minion-name" >{name}</h2>
            <div className="minion_content-img" style ={{backgroundImage: 'url(./images/' + body + '.png)' }}>
              <div className="minion_content-hair" style ={{backgroundImage: 'url(./images/' + hair + '.png)' }}></div>
              <div className="minion_content-eye" style ={{backgroundImage: 'url(./images/' + eyes + '.png)' }}></div>
              <div className="minion_content-mouth" style ={{backgroundImage: 'url(./images/' + mouth + '.png)' }}></div>
              <div className="minion_content-cloth" style ={{backgroundImage: 'url(./images/' + cloth + '.png)' }}></div>
            </div>
            {onDelete && <button className="delete" onClick={onDelete} >X</button>}
        </div>

  );
}

Minion.propTypes = {
  body: PropTypes.string,
  name: PropTypes.string,
  eyes: PropTypes.string,
  hair: PropTypes.string,
  mouth: PropTypes.string,
  cloth: PropTypes.string,
  onDelete: PropTypes.func,
}

export default Minion;
