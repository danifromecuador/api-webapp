import './styles.css';
import { apiGet } from './modules/api.js';
import { generateMovies, generatePopup } from './modules/userInteraction.js';

const mainBody = document.getElementById('main');
const popup = document.getElementById('popup-window');

window.addEventListener('load', async () => {
  const epiArray = await apiGet();
  epiArray.forEach((episode) => {
    if (episode.season === 1) {
      mainBody.innerHTML += generateMovies(episode);
    }
  });

  const episodes = document.body.querySelectorAll('.episode-img');
  Array.from(episodes).forEach((item, index) => {
    item.addEventListener('click', async () => {
      popup.innerHTML = generatePopup(epiArray[index]);
      document.getElementById('modal').style.display = 'block';
      document.getElementById('close-btn').addEventListener('click', () => {
        document.getElementById('modal').style.display = 'none';
      });
    });
  });
});