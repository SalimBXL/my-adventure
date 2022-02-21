import { useEffect, useState } from "react";
import Home from "./Home";
import axios from "axios";
import SpinWheel from "./SpinWheel";
import './App.css';

const URL = "http://127.0.0.1:3000/adventures/test.json";

function App() {
  const [adventure, setAdventure] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const readJson = (url) => {
    setIsLoading(true);
    axios.get(url)
      .then(res => {
        const data = res.data;
        setAdventure(prev => {
          setIsLoading(false);
          return data
        });
      })
      .catch((error) => {
        setIsLoading(false);
        if (error.response) {
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
        } else if (error.request) {
            console.log(error.request);
        } else {
            console.log('Error', error.message);
        }
        console.log(error.config);
    });
  }



  useEffect(() => {
    readJson(URL);
  }, []);


  return (isLoading)
    ? <SpinWheel />
    : (adventure != null) && (
      <div className="App">        
        <header>
          <h1 className="Home-title">{adventure.info.name}</h1>
        </header>
        
        <nav>Nav...</nav>
        
        <main>
          <Home title={adventure.info.name} description={adventure.info.description} image={adventure.info.image} />
        </main>
        
        <footer>
          Author: {adventure.info.author.fullname}
        </footer>
      </div>
  );
}

export default App;
