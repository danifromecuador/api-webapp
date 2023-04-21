// import './styles.css';
import {
  apiGet, sendLike, getLikes, involvementApiGet,
} from './modules/api.js';
import {
  generateMovies, generatePopup, generateComments, generateNoComments,
} from './modules/userInteraction.js';
import { episodesCounter } from './modules/episodesCounter.js';

const mainBody = document.getElementById('main');
const popup = document.getElementById('popup-window');

window.addEventListener('load', async () => {
  const numberOfLikes = await getLikes();
  const epiArray = await apiGet();
  for (let i = 0; i < epiArray.length; i += 1) {
    if (epiArray[i].season === 1) {
      mainBody.innerHTML += generateMovies(epiArray[i], numberOfLikes[i].likes);
    }
  }
  const likeBtn = document.querySelectorAll('.like-btn');
  for (let i = 0; i < likeBtn.length; i += 1) {
    likeBtn[i].addEventListener('click', async () => {
      mainBody.innerHTML = '';
      const epiArray = await apiGet();
      await sendLike(epiArray[i].id);
      window.location.reload();
    });
  }
  episodesCounter();
  const episodes = document.body.querySelectorAll('.episode-img');
  Array.from(episodes).forEach((item, index) => {
    item.addEventListener('click', async () => {
      const commentArray = await involvementApiGet(index + 1);
      popup.innerHTML = generatePopup(epiArray[index]);
      document.getElementById('modal').style.display = 'block';

      if (commentArray === null) {
        const comments = 0;
        document.getElementById('comments').innerHTML = generateNoComments(comments);
      } else {
        document.getElementById('comments').innerHTML = `<h2 class = "comments-header">Comments(${commentArray.length})</h2>`;
        commentArray.forEach((item) => {
          document.getElementById('comments').innerHTML += generateComments(item);
        });
      }

      document.getElementById('close-btn').addEventListener('click', () => {
        document.getElementById('modal').style.display = 'none';
      });
    });
  });
});
