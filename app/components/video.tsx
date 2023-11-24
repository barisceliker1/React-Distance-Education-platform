"use client"
import React, { useEffect, useState, useRef } from 'react';
import Header from '../components/header'
import ApiVideoClient from '@api.video/nodejs-client'
import Parser from 'html-react-parser';
const page = async () => {
    const [arrays, setArrays] = useState()
    const [test, setTest] = useState(false)
    const videoClient = new ApiVideoClient({ apiKey: "YMAgngMEzWxK7zwOKhblPNXi8AEJIx0RcYw85JnYFA4" })
    const videos = await videoClient.videos.list()
    const fruits = [];
    let  deneme = ""
    if (videos) {
        for (let i = 0; i < videos.data.length; i++) {
            const from = "2023-11-22";
            const dimension = "videoId"; // Use this query parameter to define the dimension that you want analytics for. - `videoId`: Returns analytics based on the public video identifiers. - `emittedAt`: Returns analytics based on the times of the play events. The API returns data in specific interval groups. When the date period you set in `from` and `to` is less than or equals to 2 days, the response for this dimension is grouped in hourly intervals. Otherwise, it is grouped in daily intervals. - `country`: Returns analytics based on the viewers' country. The list of supported country names are based on the [GeoNames public database](https://www.geonames.org/countries/). - `deviceType`: Returns analytics based on the type of device used by the viewers during the play event. - `operatingSystem`: Returns analytics based on the operating system used by the viewers during the play event. - `browser`: Returns analytics based on the browser used by the viewers during the play event.
            const videosid = videos.data[i].videoId

            const filter = "videoId:" + videosid

            const videoPlays = await videoClient.analytics.getVideosPlays({
                from, dimension, filter
            });
            if (videoPlays) {
                console.log(videoPlays.data[0].plays);

                const veri = videoPlays.data[0]
                fruits.push(veri);


            }
        }
        console.log(fruits);

        const max = Math.max(...fruits.map(({ plays }) => plays))
        const object = fruits.find(({ plays }) => plays === max);
        const veri = "https://embed.api.video/vod/" + object.value
        console.log(veri);
        deneme =veri



    }


    return (
        <div>
            <>

                <div className='flex flex-wrap space-x-4 items-center justify-center my-4'>
                    {videos.data.map((video, i) => <div key={video.videoId} id="VideoSet" className=''><h1>{video.title}</h1> <> {Parser(video.assets.iframe)}</> </div>)}
                </div>
                <div id="Block" className='block flex flex-wrap mt-16 '>
                <iframe src={deneme?deneme : "sa"} width="50%" height="100%"  allowFullScreen={true}></iframe>
                </div>


            </>
        </div>
    );
}

export default page;