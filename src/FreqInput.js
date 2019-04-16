import React, {useState} from 'react';
import { getLineX } from './events';
import Line from './Line';
import './FreqInput.css';

function FreqInput() {
  const [lines, setLines] = useState([50,100]);
  const [activeLine, setActiveLine] = useState();

  const moveLine = (e) => {
    const x = (e.buttons === 1) ? getLineX(e) : null;
    if (x) {
      setActiveLine(x);
    }
  }

  const placeLine = (e) => {
      const x = getLineX(e);
      if (x && !lines.includes(x) ) {
        setLines([...lines, x]);
        setActiveLine(null);
      }
  };
  const keys = [']','[','p','o','i','u','y','t','r','e','w','q'];
  const Lines = lines.map((line, i) => {
    const k = keys.pop();
    return (<Line key={k} keyboard={k} onSelectLine={setActiveLine} line={line}/>)
  });
  const ActiveLine = (<Line key="active" selected="true" line={activeLine}/>);
  return (
    <div 
      id="freqInput" 
      className="freqInput" 
      onMouseMove={moveLine} 
      onMouseDown={moveLine}
      onMouseUp={placeLine}
    >
      {Lines}
      {ActiveLine}
    </div>
  );
}

export default FreqInput;
