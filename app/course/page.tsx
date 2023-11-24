"use client"
import { useState, useEffect, useRef, useCallback } from 'react';
import io from 'socket.io-client';
import { auth } from '@clerk/nextjs';
import { useUser } from "@clerk/nextjs";
import Header from '../components/header'
import Footer from '../components/footer'
import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });
const Chat = () => {
  const [myStream, setMyStream] = useState();
  const [CallbackmyStream, callbacksetMyStream] = useState([]);
  const scrollRef = useRef();
  const myVideo = useRef();
  const [UserIdd, SetUserIdd] = useState()
  const [first, SetFirst] = useState()
  const [imgg, setİmgg] = useState()
  const [dogru, setDogru] = useState(false)
  const [room, setRoom] = useState("");
  const [sonmes, setMessages] = useState<string[]>([]);
  const [ders, setDers] = useState(false)
  const [gir, SetGir] = useState(false)
  const [inputValue, setInputValue] = useState('');
  const [chatscre, Setchatscre] = useState(false)
  const [message, setMessage] = useState("");
  var socket = io('http://localhost:3001', { transports: ['websocket', 'polling', 'flashsocket'] });
  const joinRoom = () => {
    if (room !== "") {
      socket.emit("join_room", room);
    }
  };
  const { isSignedIn, user, isLoaded } = useUser();
  const click = () => {
    if (isSignedIn) {
      const deger = user
      const userId = deger.id
      const resm = deger.imageUrl
      const firstt = deger.firstName
      const email = deger.emailAddresses[0].emailAddress
      SetUserIdd(userId)
      SetFirst(firstt)
      setİmgg(resm)
      setDogru(!dogru)
      joinRoom()
    }
  }
 
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  const handler = (event) => {
    Setchatscre(true)
    setRoom(event.target.value);
  };
  const socketemit = async (e) => {
    const deger = e.target.value
    console.log(deger);
    socket.emit('send_message', { message: deger, room, UserIdd, imgg, first })
    console.log(myStream, 'sa')
    console.log('JavaScript Object to JSON conversion result:');
    socket.emit("stream", { myStream, room });
  }
  if (ders == true) {
  }
  const bas = ((e) => {
    setDers(true)
  })
  useEffect(() => {
    socket.on('receive_message', async (message) => {
      const deger = message
      console.log(message, 'gelmiyor');
      SetGir(true)
      setMessages(sonmes => [...sonmes, deger]);
    });
    scrollRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' });
  }
    , [socket])
  return (
    <>
    <div className='flex flex-col h-screen justify-between'>

      <Header />
      {dogru ? "" :
        <div id="tepe" className='items-center m-auto my-16 mb-12  	overscroll-none max-w-sm p-6  '>

          <h1 htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Oda Numarası Gir </h1>
          <input className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' value={room} onChange={handler} />
          <button className='self-center	 items-center text-white my-4 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800' onClick={click} >odaya gir</button>

        </div>
      }
      {
        dogru ?
          <div>

            <div id="arka" className="m-auto my-16 mb-12  	overscroll-none max-w-sm p-6 bg-gray-400 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

              <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Oda numarası gir</label>

              <div ref={scrollRef} className='flex  flex-col'>
                {gir ?
                  sonmes.map((index) => (

                    <>
                      <div className='flex  flex items-end mb-2 justify-end items-center'>

                        <img className='rounded-full w-12 flex' id="Profile" src={index.imgg ? index.imgg : ""} alt="Girl in a jacket" width="500" height="600" />
                        <p className=' font-mono font-bold text-rose-600 ml-2'>{index.first}</p>
                        <p className={index.UserIdd == UserIdd ? 'font-mono font-bold break-words pl-4  w-5/6' : " pl-4 w-5/6"} >{index.message}</p>
                      </div>

                    </>

                  )) : ""}
                <hr />

                <div id="taban" className=' flex items-end'>
                  <input
                    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-2/4 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                    placeholder="Type something and press Enter"
                  />
                  <button className='float-right	ml-2 rounded-full bg-purple-700 mt-4 py-2 w-32' value={inputValue} onClick={socketemit}>
                    Gönder
                  </button>
                </div>

              </div>
            </div>
          </div>
          : ""
      }
      <Footer/>
    </div>

    </>

  );
};

export default Chat;