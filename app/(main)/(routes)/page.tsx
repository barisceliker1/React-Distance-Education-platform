import React, { useState } from 'react';
import { currentUser } from "@clerk/nextjs"
import { User } from 'lucide-react';
import Header from '../../components/header'
import Coment from '../../components/coment'
import Footer from '../../components/footer'
import { authMiddleware } from '@clerk/nextjs/server'
export default async function page() {
  return (
    <div className='bg-gray-100'>
      <Header />
      <div id="arkaplan" className="bg-gray-100 items-center flex flex-col md:flex-row   mt-12  mx-auto  ">
        <div className='flex w-5/6 mx-auto'>
          <h1 id="TitleofHomepage" className='text-center m-6 text-6xl'>
            Do You want Learn Online ?
          </h1>

        </div>
        <div className=' w-5/6 '
        >
          <img style={{ animationName: "example", animationDuration: "4s" }} className='      float-right mb-4 mr-4 sm:mt-8 sm:mr-16 w-5/6 sm:w-4/6' src="https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />

        </div>

      </div>
      <Coment />
      <Footer />
    </div>

  )
}