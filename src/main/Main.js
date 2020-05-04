import React from 'react';
// import './Name.css';
import { useHistory } from 'react-router-dom';

export const Main = () =>{
    const history = useHistory();

    const handleClick = () => {
        history.push('/name');
      }


  return (
    <div className="App">

        <div className="app_titles">

        <h1 className="app_title">minions</h1>
        <h3 className="app_title2">creator</h3>
        <button className="app_btnstart" onClick={handleClick}>
        Start
        </button>
        </div>


    </div>
  );
}

export default Main;
