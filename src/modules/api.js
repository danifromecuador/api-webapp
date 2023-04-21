export const apiGet = async () => {
  const req = await fetch('https://api.tvmaze.com/shows/4/episodes');
  const response = await req.json();
  return response;
};

const involvementApiGet = async (id) => {
  const req = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/1TzK26frOiLTOPOwesN3/comments?item_id=item${id}`);
  const response = await req.json();
  return response;
};

const involvementApiPost = async (id, username, comment) => {
  const req = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/1TzK26frOiLTOPOwesN3/comments', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      comment_id:`item${id}`,
      username,
      comment,
    }),
  });
  return req.json();
};

export {
  apiGet,
  involvementApiGet,
  involvementApiPost,
};