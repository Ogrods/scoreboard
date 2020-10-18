import React from 'react';


// STATELESS COMPONENT EXAMPLE SYNTAX
const Counter = (props) => {
  
    let index = props.index;

    // NO RENDER METHOD IN A STATELESS COMPONENT
    return (
      <div className="counter">
        <button className="counter-action decrement" onClick={() => props.changeScore(index, -1)}> - </button>
        <span className="counter-score">{ props.score }</span>
        <button className="counter-action increment" onClick={() => props.changeScore(index, 1)}> + </button>
      </div>
    );
  }
  
  
export default Counter;