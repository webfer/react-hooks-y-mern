const getImage = async () => {
  try {
    const apiKey = 's95nl9zc1HJQbixZCxuLroAR613ZBRVd';
    const resp = await fetch(
      `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
    );
    const { data } = await resp.json();
    const { url } = data.images.original;
    const img = document.createElement('img');
    img.src = url;
    document.body.append(img);
  } catch (error) {
    // Handled error
    console.error(error);
  }
};
getImage();
