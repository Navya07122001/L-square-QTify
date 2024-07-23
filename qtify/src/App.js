import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Section from "./components/Section/Section";
import { useEffect, useState } from "react";
import { NewalbumData, TopalbumData } from "./api/api";


function App() {
  const [topalbums, setTopAlbums] = useState([])
  const [newalbums, setNewAlbums] = useState([])
  const getTopalbums = async () => {
    try {
      const data = await TopalbumData();
      setTopAlbums(data);
    }
    catch (e) {
      return e;
    }
  }
  const getNewalbums=async()=>{
    try{
    const data=await NewalbumData();
    setNewAlbums(data)
    }
    catch(e){
      return e;
    }
  }
  useEffect(() => {
    getNewalbums();
    getTopalbums();
  }, [])
  return (
    <div className="App">
      <Navbar />
      <Hero />
  <Section title={"Top Albums"} albums={topalbums} />
  <Section title={"New Albums"} albums={newalbums} />
    </div>
  );
}

export default App;
