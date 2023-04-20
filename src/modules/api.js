const apiGet = async () => {
  const req = await fetch('https://api.tvmaze.com/shows/4/episodes');
  const response = await req.json();
  return response;
};

export {
  apiGet,
};