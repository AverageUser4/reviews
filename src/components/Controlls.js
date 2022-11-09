import React from 'react';

import {ReactComponent as LeftArrowSVG} from '../resources/left-arrow.svg';

export default function Controlls({ maxIndex, setIndex }) {
  function changeIndex(goUp = true) {
    setIndex((prevIndex) => {
      if(goUp)
        return prevIndex < maxIndex ? prevIndex + 1 : 0;
      else
        return prevIndex > 0 ? prevIndex - 1 : maxIndex;
    });
  }

  function randomIndex() {
    setIndex((prevIndex) => {
      let randomIndex = prevIndex;

      if(maxIndex === 0)
        return 0;

      while(randomIndex === prevIndex)
        randomIndex = Math.floor(Math.random() * (maxIndex + 1));

      return randomIndex;
    });
  }

  return (
    <div className="card-controlls">

      <button 
        className="arrow-button"
        onClick={() => changeIndex(false)}
      >
        <LeftArrowSVG
          className="arrow-button__svg"
        />
      </button>

      <button 
        className="arrow-button"
        onClick={changeIndex}
      >
        <LeftArrowSVG
          className="arrow-button__svg arrow-button__svg--mirrored"
        />
      </button>

      <button 
        className="button"
        onClick={randomIndex}  
      >Surprise me</button>

    </div>
  );
}