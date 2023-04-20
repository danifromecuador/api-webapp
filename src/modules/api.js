export const apiGet = async () => {
  const req = await fetch('https://api.tvmaze.com/shows/4/episodes');
  const response = await req.json();
  return response;
};

// getting the id of the involvment API
export const involvementApiId = async (index) => {
  const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/', {
    method: 'POST',
  });
  return 'D378r3vCLkaRvnEDLjsU';
};

// sending likes to the involvment API using the unique id
export const sendLike = async (index) => {
  const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/D378r3vCLkaRvnEDLjsU/likes/', {
    method: 'POST',
    body: JSON.stringify({
      item_id: `${index}`,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
};

// getting likes from the involvement API
export const getLikes = async () => {
  const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/D378r3vCLkaRvnEDLjsU/likes/', {
    method: 'GET',
  });
  const numberOfLikes = await response.json();
  console.log(numberOfLikes);
  return numberOfLikes;
};