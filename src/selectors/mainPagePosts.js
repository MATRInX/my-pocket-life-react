export default (posts, { index } = filters) => {
  return posts.filter((singlePost, postIndex) => {
    const indexLowerThanFilter = postIndex < index;
    return indexLowerThanFilter;
  });
}