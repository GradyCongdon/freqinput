import React from 'react';
import './Line.css';

function Line(props) {
    const {line, setSelectedLine, status, keyboard} = props;
    if (line == undefined) return null; // Line can be 0
    const classNames = status.join(' ') + " line";
    const styles = {
      transform: `translateX(${line}px)`,
    };
    return (
     <div className={classNames}
          id={line} 
          onClick={setSelectedLine}
          style={styles} 
          data-freq={line}
          keyboard={keyboard}
      >
        <label className="freq">{line}</label>
        <label className="keyboard">{keyboard}</label>
      </div>
    );
}


export default Line;
