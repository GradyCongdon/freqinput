import {clamp} from './util';

export const getRelativeMouse = (event, parent) => { 
  parent = parent || event.currentTarget;
  const box = parent.getBoundingClientRect();
  box['x'] = event.clientX - box.x;
  box['y'] = event.clientY - box.y;
  return box;
};

export const getLineX = (e, border = 1) => {
      let {x, width} = getRelativeMouse(e);
      x = clamp(Math.round(x), 0, width);
      return x;
};
