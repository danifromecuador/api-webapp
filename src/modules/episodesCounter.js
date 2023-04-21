export const episodesCounter = async () => {
  // episodeCard is the array of episodes that were dinamically created
  const episodeCard = document.querySelectorAll('.episode-card');
  // episodeCounter is the place got from HTML where the lenght of the array will be showed
  const episodesCounter = document.querySelector('.episodesCounter');
  episodesCounter.innerHTML = `Total episodes: ${episodeCard.length}`;
  return episodeCard.length;
};