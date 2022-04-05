import { createScore, getScores } from './games.js';

// const game_id
const GAME_ID = 'qhFG7m4RvwcnsuNmb98Y';

// handle createScore
export const handleCreateScore = (e) => {
  e.preventDefault();
  const form = document.querySelector('form');
  const message = document.querySelector('.results');
  const btn = document.querySelector('.submit');
  btn.innerHTML = "<i class='bx bx-loader-circle spin'></i>";

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
  btn.innerHTML = 'Submit';
  form.elements.user.value = '';
  form.elements.score.value = '';
};

const createTable = ({ user, score }) => {
  const tr = document.createElement('tr');
  tr.innerHTML = `
    <td>
        <span>${user}</span>
        <span>${score}</span>
    </td>
    `;

  return tr;
};

export const handleGetScore = () => {
  const table = document.querySelector('table tbody');
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
