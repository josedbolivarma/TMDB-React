export const getMovieImg = ( path, width ) => {
  return path ? `https://image.tmdb.org/t/p/w${width}${path}` : 'https://i.pinimg.com/736x/35/b4/67/35b46784c3292755c12407f3c4e28241.jpg';
}
