import './styles.css';
import { apiGet, sendLike, getLikes } from './modules/api.js';
import { generateMovies, generatePopup } from './modules/userInteraction.js';

const mainBody = document.getElementById('main');

const generateMovies = (episode, likes) => `
  <div id="episode-card-${episode.number}" class="episode-card">
    <div class="episode-img" id="episode-img-${episode.number}">
      <img src="${episode.image.medium}">
    </div>
    <div class="episode-txt">
      <p>Episode ${episode.number}</p>
      <div class="likes">
        <div class="like-btn-container">
          <img class="like-btn" src="/assets/liked.png" alt="unliked">
        </div>
        <p class="like-txt">${likes}</p>
      </div>
    </div>
  </div>
`;

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
