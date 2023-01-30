export const getGifs = async (category) =>{

    const url = `https://api.giphy.com/v1/gifs/search?api_key=ttwJ7V9gcFk5J2YC3Xh647iAHekS0HdY&q=${category}&limit=10`
    const resp = await fetch(url);
    const{data} = await resp.json();
  
    const gifs = data.map( img => ({
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url
  
    }));
  
   
    return gifs;
  }