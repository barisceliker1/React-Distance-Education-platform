"use client"
import React, { useEffect, useState, useRef } from 'react';
import DigitalSambaEmbedded from '@digitalsamba/embedded-sdk';
import Header from '../components/header'
import { useUser } from "@clerk/nextjs";
import { usePathname } from 'next/navigation'
const page = () => {
    const activeSlideRef = useRef();
    const [gir, setGir] = useState(false)
    const [test, setTest] = useState(false)
    const [firstName, setFirstName] = useState()
    const { isSignedIn, user, isLoaded } = useUser();
    const router = usePathname()
    const dene =()=>{
            setTest(true)
    }
    const sonuc = () => {
        if (isSignedIn) {
            const existingIFrame = document.querySelector('#yapı');
            const frames = activeSlideRef.current
            const roomUrl = 'https://deneme.digitalsamba.com/demo-room';
            const instanceProps = {
                frameAttributes: {
                },
                reportErrors: true
            };
            const sambaFrame = DigitalSambaEmbedded.createControl({
                url: roomUrl,
                frame: frames,
                roomSettings: {
                    videoEnabled: true,
                    audioEnabled: true,
                    appLanguage: "tr",
                    username: '' + firstName,
                },
            });
            sambaFrame.load();
        }
    }
    const bassbuton= ()=>{
        dene()
    }
    useEffect(()=>{
        if (isSignedIn) {
            const degers = user.firstName
            if(user){
                console.log(degers);
                setFirstName(degers)
            }
    
        }
        if(test){
            sonuc()
        }
    },[isSignedIn,test])
    return (

        <div>
            <Header />
            
            {test ? <iframe allow="camera; microphone" autoPlay allowFullScreen ref={activeSlideRef} id="yapı">
            </iframe> :      <div className='flex flex-col' id="roomScreen"><h1 className='text-xl	 font-serif font-bold'> Hoş Geldin &nbsp;
            {firstName?firstName:""}  !  </h1><br/><button id="clickButton" className='bg-blue-500 text-md	 font-serif font-bold text-white w-6 h-2' onClick={bassbuton}>Odaya Katıl</button></div>       
}
          
        </div>

    );
}

export default page;