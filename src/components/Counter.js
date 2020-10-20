import React from 'react';
import PropTypes from 'prop-types';

// STATELESS COMPONENT EXAMPLE SYNTAX
const Counter = ({ index, score, changeScore }) => {
  
    // NO RENDER METHOD IN A STATELESS COMPONENT
    return (
      <div className="counter">
        <button className="counter-action decrement" onClick={() => changeScore(index, -1)}> - </button>
        <span className="counter-score">{ score }</span>
        <button className="counter-action increment" onClick={() => changeScore(index, 1)}> + </button>
      </div>
    );
  }


  // THROWS A WARNING IF PROPS DO NOT MATCH DEFINED TYPE
  Counter.propTypes = {
    index: PropTypes.number,
    scores: PropTypes.number,
    changeScore: PropTypes.func
  };
  
  
export default Counter;