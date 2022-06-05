const apiKey = 's95nl9zc1HJQbixZCxuLroAR613ZBRVd';

const httpCall = fetch(
  `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
);

httpCall
  .then((resp) => resp.json())
  .then(({ data }) => {
    const { url } = data.images.original;
    const img = document.createElement('img');
    img.src = url;
    document.body.append(img);
    console.log(url);
  })
  .catch(console.warn);
