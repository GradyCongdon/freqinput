import React from 'react';
import './Line.css';

function Line(props) {
    const {line, onSelectLine, status, keyboard} = props;
    if (line == undefined) return null; // Line can be 0
    const onClick = (e) => {
      if (!onSelectLine) return;
      onSelectLine();
    }
    const classNames = status.join(' ') + " line";
    const styles = {
      transform: `translateX(${line}px)`,
    };
    return (
     <div className={classNames}
          id={line} 
          style={styles} 
          data-freq={line}
          keyboard={keyboard}
          onClick={onClick}
      >
        <label className="freq">{line}</label>
        <label className="keyboard">{keyboard}</label>
      </div>
    );
}


export default Line;
