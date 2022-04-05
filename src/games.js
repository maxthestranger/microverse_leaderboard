const BASE_URL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games';

// create game
export const createGame = async (name) => {
  await fetch(`${BASE_URL}/`, {
    method: 'POST',
    body: JSON.stringify({
      name,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  }).then((res) => res.json());
};

// get score
export const getScores = async (id) => {
  let data = null;
  await fetch(`${BASE_URL}/${id}/scores`)
    .then((res) => res.json())
    .then((d) => {
      data = d;
    });
  return data;
};

// create score
export const createScore = async ({ id, user, score }) => {
  let data = null;
  await fetch(`${BASE_URL}/${id}/scores`, {
    method: 'POST',
    body: JSON.stringify({
      user,
      score,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((res) => res.json())
    .then((d) => {
      data = d;
    });
  return data;
};
