import React from 'react';
import './FreqButton.css';

export default function FreqButton(props) {
  return (
    <button onClick={props.onClick}>
      {props.children}
    </button>
  );
}

