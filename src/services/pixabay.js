const KEY = '24835588-34c67f39a9342d1bd89adf1b2';

const fetchImages = name => {
  fetch(
    `https://pixabay.com/api/?q=${name}&page=1&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`,
  ).then(res => console.log(res));
};

export { fetchImages };
