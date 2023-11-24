"use client"
import React, { useEffect, useState, useRef } from 'react';
import io from "socket.io-client";
import Peer from "simple-peer";
import { text } from 'stream/consumers';
import Header from '../components/header'
import Footer from '../components/footer'
import Course from '../components/course'


const page = () => {

  return (
    <div className='flex flex-col h-screen justify-between' key={new Date().getTime()}>
      <Course />
      <Footer/>

    </div>

  );
}

export default page;