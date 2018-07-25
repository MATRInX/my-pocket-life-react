export default posts => {
  const postsCount = 5;
  return posts.filter((singlePost, postIndex) => {
    return postIndex < postsCount;
  });
};