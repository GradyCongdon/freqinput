import React, {useState} from 'react';
import Line from './Line';
import './FreqInput.css';

const log = (...m) => console.log(...m);
const $ = (sel) => document.querySelector(sel);

const getRelativeMouse = (event, parent) => { 
  const box = parent.getBoundingClientRect();
  return {
    ...box,
    left: event.clientX - box.left,
    top: event.clientY - box.top,
  }
};

const getLineX = (e) => {
      const f = $('#freqInput');
      let {left} = getRelativeMouse(e, f);
      let x = left - lineWidth;
      return x;
};

const lineWidth = 9 / 2 + 1;
function FreqInput() {
  const [lines, setLines] = useState([50,100]);
  const [selectedLine, setSelectedLine] = useState();
  const [tempLine, setTempLine] = useState();

  const moveLine = (e) => {
    const x = (e.buttons === 1) ? getLineX(e) : null;
    if (x) {
      setTempLine(x);
    }
  }
  const placeLine = (e) => {
      const x = getLineX(e);
      if (x && !lines.includes(x) ) {
        setLines([...lines, x]);
        setTempLine(null);
      }
  }

  const onSelectLine = (e) => {
    log('wtf');
  }
  let selected = false;
  const makeLine = (line, i) => {
    if (!line) return;
    const key = `${line}--${i}`;
    return (<Line key={key} selected={selected} onSelectLine={onSelectLine} line={line}/>);
  };
  const lineElements = lines.map(makeLine);
  selected = true;
  const tempLineElement = makeLine(tempLine);
  return (
    <div 
      id="freqInput" 
      className="freqInput" 
      onMouseMove={moveLine} 
      onMouseDown={moveLine}
      onMouseUp={placeLine}
    >
      {lineElements}
      {tempLineElement} 
    </div>
  );
}

export default FreqInput;
