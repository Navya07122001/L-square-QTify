import axios from 'axios';
const endpoint="https://qtify-backend-labs.crio.do"
export const TopalbumData=async()=>{
    try{
    const albumdata=await axios.get(`${endpoint}/albums/top`)
    return await albumdata.data;
    }
    catch(e)
    {
        return null;
    }
    
}
export const NewalbumData=async()=>{
    try{
    const albumdata=await axios.get(`${endpoint}/albums/new`)
    return albumdata.data;
    }
    catch(e)
    {
        return null;
    }
    
}
export const SongsData=async()=>{
    try{
    const albumdata=await axios.get(`${endpoint}/songs`)
    return albumdata.data;
    }
    catch(e)
    {
        return null;
    }
    
}

export const faqData=async()=>{
    try{
        const albumdata=await axios.get(`${endpoint}/faq`)
        return albumdata.data;
    }
    catch(e)
    {
        return null
    }
}