import { createScore, getScores } from './games.js';

// const game_id
const GAME_ID = 'qhFG7m4RvwcnsuNmb98Y';

// handle createScore
export const handleCreateScore = (e) => {
  e.preventDefault();
  const form = document.querySelector('form');
  const message = document.querySelector('.results');
  message.innerHTML = "<i class='bx bx-loader-circle spin'></i>";

  //   fetch user inputs
  const scoreData = {
    id: GAME_ID,
    user: form.elements.user.value,
    score: form.elements.score.value,
  };

  //   display success message
  createScore(scoreData).then((data) => {
    message.innerText = data.result;
  });

  // clear input
  form.elements.user.value = '';
  form.elements.score.value = '';
};

const createTable = ({ user, score }) => {
  const li = document.createElement('li');
  li.innerHTML = `
      <span>${user}</span>
      <span>${score}</span>
    `;

  return li;
};

export const handleGetScore = () => {
  const table = document.querySelector('.books_display');
  table.innerHTML = "<i class='bx bx-loader-circle spin'></i>";
  getScores(GAME_ID).then((data) => {
    const scores = data.result;
    if (scores) {
      table.innerHTML = '';

      scores.forEach((d) => {
        table.appendChild(createTable(d));
      });
    }
  });
};
