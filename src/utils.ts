export const API_URL = "https://swapi.dev/api";
export const makeRequest = async (path: string) => {
  try {
    const res = await fetch(`${API_URL}${path}`);
    return await res.json();
  } catch (err) {
    console.log(err);
    throw err;
  }
};
