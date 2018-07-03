export default pages => {
  let aboutMePage;
  pages.forEach(page => {
    if (!aboutMePage && page.title === "O mnie") {
      aboutMePage = page;
    }
  });
  return aboutMePage;
};
