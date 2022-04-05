import './style.css';
import { handleCreateScore, handleGetScore } from './renderGames.js';

const form = document.querySelector('form');
const btn = document.querySelector('.refresh');

window.addEventListener('load', () => {
  // create user once loaded
  handleGetScore();
  // handle form submit
  form.addEventListener('submit', (e) => handleCreateScore(e));

  //   handle table data
  btn.addEventListener('click', () => handleGetScore());
});
