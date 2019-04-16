import React, {useState} from 'react';
import { getLineX } from './events';
import { log } from './util';
import Line from './Line';
import './FreqInput.css';

function FreqInput() {
  const [lines, setLines] = useState([50,100]);
  const [activeLine, setActiveLine] = useState();
  const [selectedKey, setSelectedKey] = useState();

  const isSelectedMode = (e) => (e.buttons === 1 || selectedKey);

  const moveLine = (e) => {
    const x = (isSelectedMode(e)) ? getLineX(e) : null;
    if (x) {
      setActiveLine(x);
    }
  }

  const placeLine = (e) => {
      const x = getLineX(e);
      if (x && !lines.includes(x) ) {
        setLines([...lines, x]);
        setActiveLine(null);
        setSelectedKey(null);
      }
  };

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
      setLines(lines.filter(l => l !== selectedLine));
      setActiveLine(selectedLine);
    }
  }
  const keys = ['q','w','e','r','t','y','u','i','o','p'];
  const Lines = lines.map((line, i) => {
    const k = keys[i]
    return (<Line key={k} keyboard={k} line={line}/>)
  });
  const ActiveLine = (<Line key="active" selected="true" line={activeLine}/>);
  return (
    <div 
      id="freqInput" 
      className="freqInput" 
      onMouseMove={moveLine} 
      onMouseDown={moveLine}
      onMouseUp={placeLine}
      onKeyDown={selectLine}
      tabIndex="0"
    >
      {Lines}
      {ActiveLine}
    </div>
  );
}

export default FreqInput;
