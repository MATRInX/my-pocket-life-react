export default posts => {
  return posts.filter((post, index) => {
    let isFavouritePost = false
    post.labels.forEach(label => {
      if (!isFavouritePost && label === 'Ulubione') {
        isFavouritePost = true
      }
    });
    return isFavouritePost
  });
}
