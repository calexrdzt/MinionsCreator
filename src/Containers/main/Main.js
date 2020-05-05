import React from 'react';
// import './Name.css';
import { useHistory } from 'react-router-dom';

export const Main = () =>{
    const history = useHistory();

    const handleStart = () => {
        history.push('/name');
      }

      const handleGallery = () => {
        history.push('/gallery');
      }



  return (
    <div className="App">

        <div className="app_titles">

        <h1 className="app_title">minions</h1>
        <h3 className="app_title2">creator</h3>
        <div className="buttons_ini">
        <button className="app_btnstart" onClick={handleStart}>Start to create</button>
        <button className="app_btnstart" onClick={handleGallery}>Gallery</button>
        </div>
        </div>


    </div>
  );
}

export default Main;
