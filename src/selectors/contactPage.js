export default pages => {
  return pages.forEach(page => {
    return page.title === 'Kontakt' ? true : false;
  });
};
