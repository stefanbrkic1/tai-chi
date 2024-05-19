const URL = "https://api.unsplash.com/search/photos?page=1&query=tai-chi";
const ACCESS_KEY = "Jxh_KLDat3QNCek6GBKqjC9gYX9b-NFEgNPX2op3H1U";

async function fetchImages() {
  try {
    const response = await fetch(URL, {
      mode: "cors",
      headers: {
        Authorization: `Client-ID ${ACCESS_KEY}`,
      },
    });
    if (!response.ok) {
      throw new Error("Error: Service error");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Fetch error:", error);
  }
}

export default fetchImages;
