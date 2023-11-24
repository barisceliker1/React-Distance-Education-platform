"use client"
import { useEffect, useState } from "react";
import axios from 'axios'
import { redirect } from 'next/navigation'
import { useRouter } from 'next/navigation'
import { v4 as uuidv4 } from 'uuid';

export default function page(props) {
  const router = useRouter()
  const [wordd, setWordd] = useState()
  const [search, setSearch] = useState()
  useEffect(() => {
    axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${props.slug}`).then((response) => {
      console.log('girdi');
      const GenelVeri = response.data[0].meanings
      setWordd(GenelVeri)
    }).catch((error) => {
      router.push("/adres/404")
      redirect('/adres/404')

      console.log(error, 'error');
    });
  }
    , [setWordd])

  return (
    <>
      <>
        <div className="flex justify-center mt-16 h-screen">

          <div className=" flex flex-wrap w-4/5 font-mono text-center mx:auto grid place-items-center  bg-slate-300  shadow-inner md:h-4/5 sm:h-5/6			justify-center place-content-center border-2 rounded">
            <div className="flex flex-wrap grid grid-cols-2 gap-4 place-content-start ">
              {wordd ? wordd.map((meaning) => {
                return (<p className="m-0 mx-4  text-left" key={uuidv4()}>
                  <hr class="h-px my-6 bg-gray-200 border-0 bg-purple-700"></hr>

                  <p className="m-0  text-left text-rose-600">Type Of Meaning: </p> {meaning.partOfSpeech}

                  <p className="m-0   text-left text-rose-600">Meaning:</p>  {meaning.definitions[0].definition}
                  <hr class="h-px my-6 bg-gray-200 border-0 bg-purple-700"></hr>
                </p>

                )

              }) : <p>loading</p>
              }
            </div>
          </div>
        </div>

      </>
    </>

  );
}