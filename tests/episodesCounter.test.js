import episodesCounter from '../src/modules/episodesCounter.js';

describe('Testing for episodes count', () => {
  const episodeCards0 = [];
  const episodeCards2 = [{id: 1, class: 'episode-card'}, {id: 2, class: 'episode-card'},];
  const episodeCards100 = [];
  for (let i = 0; i < 100; i++) {
    episodeCards100.push({id: i, class: 'episode-card'});
  }

  it('testing for zero episodes', async () => {
    const result = await episodesCounter(episodeCards0);    
    expect(result).toBe(0);
  });

  it('testing for two episodes', async () => {
    const result = await episodesCounter(episodeCards2);    
    expect(result).toBe(2);
  });

  it('testing for one hundred episodes', async () => {
    const result = await episodesCounter(episodeCards100);    
    expect(result).toBe(100);
  });

});