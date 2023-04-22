export const apiGet = async () => {
  const req = await fetch('https://api.tvmaze.com/shows/4/episodes');
  const response = await req.json();
  return response;
};

// getting the id of the involvment API
export const involvementApiId = async () => {
  const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/', {
    method: 'POST',
  });
  return [response, 'D378r3vCLkaRvnEDLjsU'];
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
  return response;
};

// getting likes from the involvement API
export const getLikes = async () => {
  const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/D378r3vCLkaRvnEDLjsU/likes/', {
    method: 'GET',
  });
  const numberOfLikes = await response.json();
  return numberOfLikes;
};

const involvementApiGet = async (id) => {
  const req = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/1TzK26frOiLTOPOwesN3/comments?item_id=item${id}`);
  const response = await req.json();
  if (req.status === 400) {
    return null;
  }
  return response;
};

const involvementApiPost = async (id, username, comment) => {
  await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/1TzK26frOiLTOPOwesN3/comments', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      item_id: `item${id}`,
      username,
      comment,
    }),
  });
};

export {
  involvementApiGet,
  involvementApiPost,
};