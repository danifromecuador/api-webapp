export default function commentCounter(commentsArray) {
  let counter = 0;
  if (commentsArray === 0) {
    return counter;
  }
  commentsArray.forEach(() => {
    counter += 1;
  });
  return counter;
}