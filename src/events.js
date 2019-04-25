import {clamp} from './util';

export const getRelativeMouse = (event, parent) => { 
  parent = parent || event.currentTarget;
  const box = parent.getBoundingClientRect();
  box['x'] = event.clientX - box.x
  box['y'] = event.clientY - box.y;
  return box;
};

export const getLineX = (e, options) => {
      const { min, max, offset} = options
      let {x, width} = getRelativeMouse(e);
      x = clamp(Math.round(x + offset), min || 0,  max || width);
      return x;
};

