import Home from "./Home";
import axios from "axios";
import './App.css';
import { useEffect, useState } from "react";

const URL = "http://127.0.0.1:3000/adventures/test.json";

function App() {
  const [adventure, setAdventure] = useState(null);

  const readJson = (url) => {
    axios.get(url)
      .then(res => {
        const data = res.data;
        setAdventure(data);
      })
      .catch((error) => {
        // Error
        if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
        } else if (error.request) {
            // The request was made but no response was received
            // `error.request` is an instance of XMLHttpRequest in the 
            // browser and an instance of
            // http.ClientRequest in node.js
            console.log(error.request);
        } else {
            // Something happened in setting up the request that triggered an Error
            console.log('Error', error.message);
        }
        console.log(error.config);
    });
  }



  useEffect(() => {
    readJson(URL);
  }, []);


  return (adventure == null)
    ? <h1>ERROR : Object "adventure" not initialized.</h1>
    : (
      <div className="App">        
        <header>
          <h1 className="Home-title">{adventure.info.name}</h1>
        </header>
        
        <nav>Nav...</nav>
        
        <main>
          <Home title={adventure.info.name} description={adventure.info.description} image={adventure.info.description} />
        </main>
        
        <footer>
          Author: {adventure.info.author.fullname}
        </footer>
      </div>
  );
}

export default App;
