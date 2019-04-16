import React, {useState} from 'react';
import './FreqInput.css';

/*
function FreqInput() {
  const [lines, setLines] = useState([50]);
  const lineElements = lines.map(line => {
    console.log(line);
    const styles = {
      transform: `translateX(${line}px)`
    };
    return (<div className="line" style={styles} key={line} data-freq={line}>{line}</div>);
  });
  const setLine = (e) => {
    const x = e.clientX;
    lines.push(x)
    setLines(lines);
  };
  return (
    <div onClick={setLine}>
      {lineElements}
    </div>
  );
}
*/
const lineWidth = 2;
const getRelativeMouse = (event, parent) => { 
  const box = parent.getBoundingClientRect();
  return {
    ...box,
    left: event.clientX - box.left,
    top: event.clientY - box.top,
  }
};

function FreqInput() {
  const [line, setLine] = useState(50);
  const styles = {
    transform: `translateX(${line}px)`
  };
  const moveLine = (e) => {
    if (e.buttons === 1) {
      const f = document.getElementById('freqInput');
      let {left} = getRelativeMouse(e, f);
      setLine(left - lineWidth);
    }
  };
  return (
    <div id="freqInput" onMouseMove={moveLine} onMouseDown={moveLine}>
      <div className="line" style={styles} key={line} data-freq={line}>
        <label>{line}</label>
      </div>
    </div>
  );
}

export default FreqInput;
