import React, {useState} from 'react';
import { getLineX } from './events';
import { log } from './util';
import Line from './Line';
import './FreqInput.css';

function FreqInput() {
  const [lines, setLines] = useState([50,100]);
  const [activeLine, setActiveLine] = useState();
  const [selectedKey, setSelectedKey] = useState();

  const addLine = (l, i) => {
    if (!l || lines.includes(l) || lines.length + 1 > keys.length) return;
    if (i) {
      lines[i] = l;
    } else {
      lines.push(l);
    }
    console.log(lines);
    setLines(lines);
  }

  const isSelectMode = (e) => (e.buttons === 1 || selectedKey);

  const upLine = (e) => {
    const l = getLineX(e);
    setActiveLine(l);
  }; 

  const downLine = (e) => {
    const l = getLineX(e);
    const i = selectedKey && keys.indexOf(selectedKey);
    addLine(l, i);
    setActiveLine(null);
    setSelectedKey(null);
  };

  const moveLine = (e) => {
    if (!isSelectMode(e)) return;
    const l = getLineX(e);
    setActiveLine(l);
  }


  const getKeyLine = (code) => {
    return lines[keys.indexOf(code)];
  }

  const selectLine = (e) => {
    const { key:code } = e;
    if (selectedKey === code) {
      setSelectedKey(null);
      return;
   }
    setSelectedKey(code);
    const selectedLine = getKeyLine(code);
    if (selectedLine) {
      setActiveLine(selectedLine);
    }
  }
  const keys = ['q','w','e','r','t','y','u','i','o','p'];
  const nextKey = keys[lines.length];
  const Lines = lines.map((line, i) => {
    const k = keys[i]
    const up = selectedKey === k ? 'up' : '';
    return (<Line key={line} keyboard={k} status={[up]} line={line}/>)
  });

  return (
    <div 
      className="freqInput" 
      onMouseMove={moveLine} 
      onMouseUp={downLine}
      onMouseDown={upLine}
      onKeyDown={selectLine}
      tabIndex="0"
    >
      {Lines}
      {<Line key="active" keyboard={selectedKey || nextKey} status={['selected']} line={activeLine}/>}
    </div>
  );
}

export default FreqInput;
