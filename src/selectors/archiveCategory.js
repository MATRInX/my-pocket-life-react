import moment from 'moment';

export default posts => {
  const archiveSet = new Set();
  posts.forEach(post => {
    const postDateText = moment(post.published).format('MMMM YYYY');
    const archiveCategory = postDateText.charAt(0).toUpperCase() + postDateText.slice(1);
    archiveSet.add(archiveCategory);
  });
  const archive = [];
  archiveSet.forEach(text => {
    const dateValues = text.split(' ');
    const year = moment(dateValues[1], 'YYYY').year();
    const month = moment(dateValues[0], 'MMMM').month() + 1;
    archive.push({
      text,
      year,
      month
    })
  })
  return archive;
}