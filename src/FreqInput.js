import React, { useState } from 'react';
import { getLineX } from './events';
import { log } from './util';
import FreqButton from './FreqButton';
import Line from './Line';
import './FreqInput.css';

function FreqInput(props) {
  const [lines, setLines] = useState([]);
  const [activeLine, setActiveLine] = useState();
  const [selectedKey, setSelectedKey] = useState();


  const keys = ['q','w','e','r','t','y','u','i','o','p'];
  const nextKey = keys[lines.length];
  const getKeyIndex = (code) => keys.indexOf(code);
  const getKeyLine = (code) => lines[keys.indexOf(code)];

  const addLine = (l, loc) => {
    if (!l || lines.includes(l) || lines.length + 1 > keys.length) return;
    const newlines = [...lines]
    if (loc && typeof loc === 'number') {
      newlines[loc] = l;
    } else if (loc && typeof loc === 'string') {
      newlines[getKeyIndex(loc)] = l;
    } else {
      newlines.push(l);
    }
    log('add', newlines);
    setLines(newlines);
  }


  const downLine = (e) => {
    log('down');
    const l = getLineX(e);
    addLine(l, selectedKey);
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
    setActiveLine(activeLine); // set to "mouse" pos
  }

  const focus = (e) => {
    log('focus');
    e.currentTarget.focus();
  };

  const sortLines = () => {
    const newlines = [...lines];
    newlines.sort((a,b) => a - b);
    setLines(newlines);
  }


  const Lines = lines.map((line, i) => {
    const k = keys[i]
    const up = selectedKey === k ? 'up' : '';
    return (<Line key={line} keyboard={k} status={[up]} line={line}/>)
  });

  const full = (lines.length === keys.length && !selectedKey) ? 'full' : '';


  return (
    <section> 
      <div 
        className={['freqInput', full].join(' ')}
        onMouseMove={moveLine} 
        onMouseOver={focus}
        onMouseUp={downLine}
        onKeyDown={selectLine}
        tabIndex="0"
      >
        {props.keydown}
        {Lines}
        {!full && <Line key="active" keyboard={selectedKey || nextKey} status={['selected']} line={activeLine}/>} </div>
      <FreqButton onClick={sortLines}>sort</FreqButton>
    </section>
  );
}


export default FreqInput;
