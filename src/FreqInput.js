import React, { useState } from 'react';
import { getLineX } from './events';
import { log } from './util';
import Line from './Line';
import './FreqInput.css';

function FreqInput() {
  const [lines, setLines] = useState([]);
  const [activeLine, setActiveLine] = useState();
  const [selectedKey, setSelectedKey] = useState();

  const keys = ['q','w','e','r','t','y','u','i','o','p'];
  const nextKey = keys[lines.length];
  const getKeyIndex = (code) => keys.indexOf(code);
  const getKeyLine = (code) => lines[keys.indexOf(code)];

  const addLine = (l, loc) => {
    if (!l || lines.includes(l) || lines.length + 1 > keys.length) return;
    if (loc && typeof loc === 'number') {
      lines[loc] = l;
    } else if (loc && typeof loc === 'string') {
      lines[getKeyIndex(loc)] = l;
    } else {
      lines.push(l);
    }
    log('add', lines);
    setLines(lines);
  }

  const removeLine = (loc) => {
    if (loc && typeof loc === 'number') {
      lines[loc] = null;
    } else if (loc && typeof loc === 'string') {
      lines[getKeyIndex(loc)] = null;
    }
    const newlines = lines.filter(l => l);
    log('remove', loc, newlines);
    setLines(newlines);
  }


  const downLine = (e) => {
    log('down');
    const l = getLineX(e);
    const i = selectedKey && keys.indexOf(selectedKey);
    addLine(l, i);
    setActiveLine(null);
    setSelectedKey(null);
  };

  const moveLine = (e) => {
    const l = getLineX(e);
    setActiveLine(l);
  }

  const selectLine = (e) => {
    const { key:code } = e;
    log('select', code);
    if ( (!selectedKey && selectedKey === code) || !keys.includes(code)) {
      setActiveLine(null);
      setSelectedKey(null);
      return;
   }
    setSelectedKey(code);
    const selectedLine = getKeyLine(code);
    if (selectedLine) {
      addLine(activeLine, code);
      setActiveLine(selectedLine);
    }
  }

  document.addEventListener('keydown', selectLine.bind(this));


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
    >
      {Lines}
      {<Line key="active" keyboard={selectedKey || nextKey} status={['selected']} line={activeLine}/>}
    </div>
  );
}

export default FreqInput;
