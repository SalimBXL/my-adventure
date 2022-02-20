import Home from "./Home";
import axios from "axios";
import './App.css';
import { useEffect, useState } from "react";

const URL = "http://127.0.0.1:3000/adventures/test.json";

function App() {
  const [adventure, setAdventure] = useState();

  const readJson = (url) => {
    axios.get(url)
      .then(res => {
        const data = res.data;
        setAdventure(data);
      })
  }



  useEffect(() => {
    readJson(URL);
  }, []);


  return (
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
