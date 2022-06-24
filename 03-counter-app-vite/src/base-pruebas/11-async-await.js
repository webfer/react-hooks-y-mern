export const getImagen = async () => {
  try {
    const apiKey = 's95nl9zc1HJQbixZCxuLroAR613ZBRVd';
    const urlApi = `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`;
    const resp = await fetch(urlApi);
    const { data } = await resp.json();

    const { url } = data.images.original;

    return url;
  } catch (error) {
    // manejo del error
    return 'No se encontro la imagen Giphy';
  }
};

getImagen();
