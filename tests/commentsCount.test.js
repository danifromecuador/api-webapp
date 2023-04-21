import commentCounter from '../src/modules/commentsCounter.js';

describe('Testing for comments count', () => {
  it('Comments count test', () => {
    const commentArray = [
      {
        created_date: '23-04-2023',
        username: 'Antwi',
        comment: 'This episode was dope',
      },
      {
        created_date: '22-04-2023',
        username: 'Dani',
        comment: 'I like this episode',
      },
      {
        created_date: '24-04-2023',
        username: 'Mylo',
        comment: 'I felt sad after watching this episode',
      },
    ];
    const output = commentCounter(commentArray);
    expect(output).toBe(3);
  });

  it('No Comments count test', () => {
    const noComments = 0;
    const output = commentCounter(noComments);
    expect(output).toBe(0);
  });
});