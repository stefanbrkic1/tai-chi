import { useEffect } from "react";
import Router from "./components/Router";
import fetchImages from "./services/imagesApi";

function App() {
  useEffect(() => {
    fetchImages()
      .then((data) => console.log("Data in App component:", data))
      .catch((error) => console.error("Error in App component:", error));
  }, []);

  return <Router />;
}

export default App;
