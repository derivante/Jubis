import { init } from './init.js';
import { initCursor } from './terminal/cursor.js';
import { loading } from './terminal/terminal.js';
import { handleClick, fullscreen, globalListener } from './handlers/globalHandlers.js';


document.addEventListener("DOMContentLoaded", init);
initCursor();
loading();


document.addEventListener("keydown", globalListener);

Object.assign(window, {
  handleClick,
  fullscreen
});


