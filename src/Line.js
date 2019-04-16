import React from 'react';
import './Line.css';

function Line(props) {
    const {line, setSelectedLine, selected, keyboard} = props;
    const classNames = ["line", selected ? "selected" : ''].join(' ');
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
