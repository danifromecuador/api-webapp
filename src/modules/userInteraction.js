const generatePopup = (info) => {
  return `
    <div id = "modal">
        <div id = "modal-content">
            <img id = "close-btn" src = "../assets/closebtn.png" alt = "close button"/>
            <img class = "original-img" src = "${info.image.original}" alt = ""/>
            <p class = "episode-num">Episode ${info.number}</p>
            <p class = "episode-name">Episode ${info.name}</p>
            <div class = "info">
              <div class = "info-left-col">
                <p>type: ${info.type}</p>
                <p>airdate: ${info.airdate}</p>
                <p>airtime: ${info.airtime}</p>
              </div>
              <div class = "info-right-col">
                <p>airstamp: ${info.airstamp}</p>
                <p>runtime: ${info.runtime}</p>
                <p>rating: ${info.rating.average}</p>
              </div>
            </div>
        </div>
    </div>
  `
}

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

export {
  generatePopup,
  generateMovies,
}