import './styles.css';
import { apiGet } from './modules/api.js';

const mainBody = document.getElementById('main');
const popup = document.getElementById('popup-window');

function generateMovies(episode) {
  return `
    <div id = "episode-card-${episode.number}" class = "episode-card">
      <div class = "episode-img" id = "episode-img-${episode.number}">
        <img src = "${episode.image.medium}">
      </div>
      <div class = "episode-txt">
        <p>Episode ${episode.number}</p>
        <div class = "likes">
          <div class = "like-btn-container"><img class = "like-btn" src = "/assets/unliked.png" alt = "unliked"></div>
          <p class = "like-txt">5 likes</p>
        </div>
      </div>
    </div>
  `;
}

window.addEventListener('load', async () => {
  const epiArray = await apiGet();
  epiArray.forEach((episode) => {
    if (episode.season === 1) {
      mainBody.innerHTML += generateMovies(episode);
    }
  });
});