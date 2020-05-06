import React from 'react';
import './Minion.css';
import PropTypes from 'prop-types';


export const Minion = ({body, name, hair, eyes, mouth, cloth, onDelete, width, height}) => {
 

  return (

        <div className="minion" >
       <h2 className="minion-name" >{name}</h2>
            <div className="minion_content-img" style ={{backgroundImage: 'url(./images/' + body + '.png)',width:width, height:height }}>
              <div className="minion_content-hair" style ={{backgroundImage: 'url(./images/' + hair + '.png)',width:width, height:height }}></div>
              <div className="minion_content-eye" style ={{backgroundImage: 'url(./images/' + eyes + '.png)',width:width, height:height }}></div>
              <div className="minion_content-mouth" style ={{backgroundImage: 'url(./images/' + mouth + '.png)',width:width, height:height }}></div>
              <div className="minion_content-cloth" style ={{backgroundImage: 'url(./images/' + cloth + '.png)',width:width, height:height }}></div>
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
  width: PropTypes.string,
  height: PropTypes.string,
}

export default Minion;
