export const STAGE_WIDTH = 12;
export const STAGE_HEIGHT = 20;
//each row will create a new array with [0.clear]
export const createStage = () =>
  Array.from(Array(STAGE_HEIGHT), () =>
    new Array(STAGE_WIDTH).fill([0, 'clear']),
  );
