const ACCESS_KEY = "Jxh_KLDat3QNCek6GBKqjC9gYX9b-NFEgNPX2op3H1U";

async function fetchImages(page) {
  try {
    const response = await fetch(
      `https://api.unsplash.com/search/photos?page=${page}&query=tai-chi tai chi martial china`,
      {
        mode: "cors",
        headers: {
          Authorization: `Client-ID ${ACCESS_KEY}`,
        },
      }
    );
    if (!response.ok) {
      throw new Error("Error: Service error");
    }

    const data = await response.json();

    if (data.results.length < 10) {
      console.log("ERROR FROM API");
      throw new Error("MESSAGE: No more images left in gallery");
    }

    const modifiedData = {
      img1: data.results[0].urls.regular,
      img2: data.results[1].urls.regular,
      img3: data.results[2].urls.regular,
      img4: data.results[3].urls.regular,
      img5: data.results[4].urls.regular,
      img6: data.results[5].urls.regular,
      img7: data.results[6].urls.regular,
      img8: data.results[7].urls.regular,
      img9: data.results[8].urls.regular,
      img10: data.results[9].urls.regular,
    };

    return modifiedData;
  } catch (error) {
    console.error("Fetch error:", error);
    throw error;
  }
}

export default fetchImages;
