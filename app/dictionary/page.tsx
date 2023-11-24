"use client"
import { useEffect, useState } from "react";
import axios from 'axios'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link';
import Header from '../components/header'
import Footer from '../components/footer'

export default function page({ params }) {
  const [wordd, setWordd] = useState()
  const [search, setSearch] = useState()
  useEffect(() => {
    axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${search ? search : params.slug}`).then((response) => {
      const GenelVeri = response.data[0].meanings
      setWordd(GenelVeri)

    });
  }

    , [setWordd])

  return (
    <>
    <div className="flex flex-col h-screen justify-between bg-gray-100">

      <Header />
      <div className="h-24 flex justify-center mt-2 mb-32">

        <div id="headPlan" className="w-80 font-mono text-center mx:auto grid place-items-center    h-48		justify-center place-content-center ">

          <h5 className="text-xl	 font-serif font-bold mb-3">Which word do you want learn ?</h5>
          <input type="text" onChange={(e) => {
            setSearch(e.target.value)
          }} name="price" id="price" className="block  w-48 rounded-md border-2 border-rose-500 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="write word" />

          <Link className="font-bold ml-2 mt-3 text-indigo-900 no-underline" href={"/adres/" + search}>Learn Meaning</Link>
        </div>
      </div>

      <Footer />
      </div>

    </>

  );
}