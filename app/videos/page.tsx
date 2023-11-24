"use client"
import React, { useEffect, useState, useRef } from 'react';
import Header from '../components/header'
import Footer from '../components/footer'
import Video from '../components/video'
import axios from 'axios';
import Parser from 'html-react-parser';

const page =  () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [tests, settests] = useState(false);
    const [deneme, setDeneme] = useState(false);
    const [alldata, setalldata] = useState([]);
    const [gecti, setGecti] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    // Filter the data based on the search term
    if(searchTerm){
        const result = gecti.filter((word) => {
            console.log(word.title)
            
            word.title ===searchTerm })
           const filtered_users =  gecti.filter(function(user){
                user.title = user.title.toLowerCase();
               return user.title.indexOf(searchTerm) > -1; 
          });
          console.log(filtered_users);
            setSearchResults(filtered_users);
            setDeneme(true)
    }

     
      }
  useEffect(()=>{
    async function fetchPrice() {
        try {
          const price = await axios.get(`http://localhost:3005/api`);
          setGecti(price.data.videos.data)
          setalldata(price.data)
          settests(true)
          return price;
        } catch (e) {
          console.log(e.response.data.error)
        }
      }
      fetchPrice()
      if(searchTerm===""){
        setDeneme(false)
        console.log(alldata,'sex');
        
        setSearchResults(alldata);

    }
  },[searchTerm])
    return (
        <div className='flex flex-col h-screen '>
            <Header />
            <div id="videoback" className='grid'>
                <div className='flex items-center justify-center mx-0 my-6'>Videos</div>
                <div className='flex flex-wrap space-x-4 items-center justify-center my-6 '>
                <label htmlFor="currency" className="">Video ara</label>
                <input type="text" value={searchTerm}
        onChange={handleSearch} name="price" id="price" className="block w-96 rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="search education"/>
                </div>
                  {tests?  <div>
                <div className='flex flex-wrap space-x-4 items-center justify-center my-4'>
                    {deneme?searchResults.map((video, i) => <div key={video.videoId} id="VideoSet" className=''><h1>{video.title}</h1> <> {Parser(video.assets.iframe)}</> </div>)
                    :alldata.videos.data.map((video, i) => <div key={video.videoId} id="VideoSet" className=''><h1>{video.title}</h1> <> {Parser(video.assets.iframe)}</> </div>)}
                </div>
                <div id="Block" className='border-solid border-2 border-sky-500 block flex flex-wrap items-center justify-center text-center mt-36 mb-8 '>
                    <h1 className='my-8'>En çok izlenen Video</h1>
                    {alldata.deneme?  <iframe id="videoiframe" src={alldata.deneme?alldata.deneme : "sa"} width="80%" height="100%"  allowFullScreen={true}></iframe> : ""}
                </div>
                </div>
:""}
            </div>
            <Footer/>
            </div>
    )
}

export default page