import React from 'react';
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Section from "./components/Section/Section";
import AccordionStyle from "./components/AccordionStyle/AccordionStyle";
import { NewalbumData, TopalbumData, SongsData,faqData } from "./api/api";
function LandingPage() {
    const [topalbums, setTopAlbums] = useState([])
  const [newalbums, setNewAlbums] = useState([])
  const [songs,setSongs]=useState([])
  const [faq,setFaqs]=useState([])
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
  const getSongs=async()=>{
    try{
    const data=await SongsData();
    setSongs(data)
    }
    catch(e){
      return e;
    }
  }
  const getfaqs=async()=>{
    try{
      const data=await faqData();
      setFaqs(data.data)
    }
    catch(e)
    {
      return e;
    }
  } 
  useEffect(() => {
    getNewalbums();
    getTopalbums();
    getSongs();
    getfaqs();
  }, [])
    return (
        <div>
             <Navbar />
      <Hero />
  <Section title={"Top Albums"} albums={topalbums} />
  <Section title={"New Albums"} albums={newalbums} />
  <Section title={"Songs"} albums={songs} />
  <AccordionStyle data={faq}/>
        </div>
    );
}

export default LandingPage;