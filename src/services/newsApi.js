const API_KEY = "a7d3ff2d1258f83d61b735fbe8ce8174";

async function fetchNews() {
  try {
    const response = await fetch(
      `https://gnews.io/api/v4/search?q="tai chi"&in=title&lang=en&apikey=${API_KEY}`,
      {
        mode: "cors",
      }
    );

    if (!response.ok) {
      throw new Error("Error: Service error");
    }

    const data = await response.json();
    console.log(data.articles);
    return data.articles;
  } catch (error) {
    console.error("Fetch error:", error);
    throw error;
  }
}

export default fetchNews;
