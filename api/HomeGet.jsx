
const url = "https://api.unsplash.com/search/photos";

export const getFotos = async (busqueda, page=1) => {

  const response = await fetch(
    `${url}?page=${page}&query=${busqueda}`,
    {
      method: "GET",
      headers:  {
        "Content-type": "application/json; charset=UTF-8",
        "Authorization": JSON.stringify("Client-ID 9m9DxUxtFA0CCKO9UMSaxLTl2G4UbypsJ8UVvjBUteM"),
      },
    }
  ).then((response) => response.json());
  return response;
}


export const getFoto = async (id) => {
  
  const response = await fetch(
    `https://api.unsplash.com/photos/${id}`,
    {
      method: "GET",
      headers:  {
        "Content-type": "application/json; charset=UTF-8",
        "Authorization": JSON.stringify("Client-ID 9m9DxUxtFA0CCKO9UMSaxLTl2G4UbypsJ8UVvjBUteM"),
      },
    }
  ).then((response) => response.json());

  return response;
}
