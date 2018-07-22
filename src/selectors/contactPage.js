export default pages => {
  let contactPage;
  pages.forEach(page => {
    if (!contactPage && page.title === 'Kontakt') {
      contactPage = page;
    }
  });
  return contactPage;
};
