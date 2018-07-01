const CATEGOTY_NAME = 'kategoria';

export const LINKS = {
  HOME: '/',
  ABOUT_ME: '/o-mnie',
  CONTACT: '/kontakt',
  FACEBOOK: 'https://www.facebook.com/MyPocketLife/',
  INSTAGRAM: 'https://www.instagram.com/aneta.pos/',
  POCKET_SCRAPBOOKING: `/${CATEGOTY_NAME}/pocket-scrapbooking`,
  INSPIRATION: `/${CATEGOTY_NAME}/inspiracje`,
  DIY: `/${CATEGOTY_NAME}/diy`,
  REVIEWS: `/${CATEGOTY_NAME}/recenzje`,
  COMMUNITY: `/${CATEGOTY_NAME}/spolecznosc`,
  NEWS: `/${CATEGOTY_NAME}/news`
};

export const CATEGORIES = {
  POCKET_SCRAPBOOKING: {
    name: 'Pocket scrapbooking',
    link: LINKS.POCKET_SCRAPBOOKING
  },
  INSPIRATION: {
    name: 'Inspiracje',
    link: LINKS.INSPIRATION
  },
  DIY: {
    name: 'DIY',
    link: LINKS.DIY
  },
  REVIEWS: {
    name: 'Recenzje',
    link: LINKS.REVIEWS
  },
  COMMUNITY: {
    name: 'Społeczność',
    link: LINKS.COMMUNITY
  },
  NEWS: {
    name: 'News',
    link: LINKS.NEWS
  }
};

export default LINKS;