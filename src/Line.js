import React from 'react';
import './Line.css';

function Line(props) {
    const {line, setSelectedLine, selected} = props;
    const color = selected ? 'red' : 'black';
    const styles = {
      transform: `translateX(${line}px)`,
      color,
      backgroundColor: color,
      borderColor: color
    };
    return (
     <div className="line" 
          id={line} 
          onClick={setSelectedLine}
          style={styles} 
          data-freq={line}
      >
        <label>{line}</label>
      </div>
    );
}

export default Line;
