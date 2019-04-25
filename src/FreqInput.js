import React, { useState } from 'react';
import { getLineX } from './events';
import { log } from './util';
import FreqButton from './FreqButton';
import Line from './Line';
import './FreqInput.css';


const PLACE = 'place'
const EDIT = 'edit';
function FreqInput() {

  const [lines, setLines] = useState([]);
  const [activeLine, setActiveLine] = useState();
  const [selectedKey, setSelectedKey] = useState();
  const [mode, setMode] = useState(PLACE);

  const keys = ['q','w','e','r','t','y','u','i','o','p'];
  const getKeyIndex = (code) => keys.indexOf(code);
  const getKeyLine = (code) => lines[keys.indexOf(code)];

  const isFull = () => lines.length + 1 > keys.length;
  const isReplacementLine = () => activeLine && selectedKey;

  const setLine = (l, loc) => {
    if (1 == undefined || lines.includes(l)) return;
    if (isFull() && !isReplacementLine() ) return;
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

  const lineOptions = {
    min: 0,
    max: 400,
    offset: -25,
  }


  const downLine = (e) => {
    const l = getLineX(e, lineOptions);
    setLine(l, selectedKey);
    setActiveLine(null);
    setSelectedKey(null);

  };

  const moveLine = (e) => {
    const l = getLineX(e, lineOptions);
    setActiveLine(l);
  }


  const selectLine = (key) => {
    if ( (!selectedKey && selectedKey === key) || !keys.includes(key)) {
      setActiveLine(null);
      setSelectedKey(null);
      return;
   }
    setSelectedKey(key);
    switch (mode) {
      case PLACE:
        setActiveLine(activeLine) // set to last moue pos
        break;
      case EDIT:
        setActiveLine(getKeyLine(key)); // set to line key
        setMode(PLACE);
        break;
    }
  }

  const focus = (e) => {
    e.currentTarget.focus();
  };

  const sortLines = () => {
    const newlines = [...lines];
    newlines.sort((a,b) => a - b);
    setLines(newlines);
  }


  const Lines = lines.map((line, i) => {
    const k = keys[i];
    const up = selectedKey === k ? 'up' : '';
    return (
      <Line line={line}
        key={line} 
        keyboard={k} 
        status={[up, mode]} 
        onSelectLine={mode === EDIT ? selectLine.bind(this, k) : null}
      />
    );
  });

  const toggleMode = (e) => {
    setMode(mode === PLACE ? EDIT : PLACE)
    setActiveLine(null);
  };

  const full = (lines.length === keys.length && !selectedKey) ? 'full' : '';

  const ActiveLine = !full && (
    <Line key="active" 
          keyboard={selectedKey || keys[lines.length]}
          status={['selected']} 
          line={activeLine}
    />
  );

  return (
    <section> 
      <div 
        className={['freqInput', full, mode].join(' ')}
        onMouseMove={mode === PLACE ? moveLine : null} 
        onMouseOver={mode === PLACE ? focus : null}
        onMouseUp={mode === PLACE ?  downLine : null}
        onKeyDown={e => selectLine(e.key)}
        tabIndex="0"
      >
        <div className="border"></div>
        {Lines}
        {ActiveLine}
      </div>
      <FreqButton onClick={sortLines}>sort</FreqButton>
      <FreqButton onClick={toggleMode}>{mode === PLACE ? 'edit' : 'place'}</FreqButton>
    </section>
  );
}


export default FreqInput;
