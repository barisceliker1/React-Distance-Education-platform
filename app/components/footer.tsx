"use client"
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
const Footer = () => {
        return (
                <div id="footer" className='w-screen flex h-48 bg-indigo-400     '>
                        <div className='w-96 text-center h-48'>
                                <Link className="" href={"/"}><img className='mt-10 ml-10 ' id="Footerlogo" src="https://i.ibb.co/ZSd3DV9/Ba-l-ks-z-3.png" alt="Distance Education" />
                                </Link>
                                <h1 className='h-36 mt-12'>Start today and <br />
                                        And improve yourself
                                </h1>
                        </div>
                        <div className='betweenFooter'></div>
                        <div className='float-right'>
                                <ul className="float-right text-right block flex flex-col ml-8 mt-4">
                                        <li className="ml-6 mt-4  inline-grid">
                                                <Link className="text-slate-50 hover:text-yellow-400" href={"/dictionary"}>Dictionary</Link>

                                        </li>
                                        <li className="ml-6 inline-grid">
                                                <Link className="text-slate-50 hover:text-yellow-400" href={"/kurs"}>Live Course</Link>

                                        </li>
                                        <li className="ml-6 inline-grid">
                                                <Link className="text-slate-50 hover:text-yellow-400" href={"/course"}>Chat</Link>

                                        </li>
                                        <li className="ml-6 inline-grid">
                                                <Link className="text-slate-50 hover:text-yellow-400" href={"/videos"}>Kayıtlı Dersler</Link>

                                        </li>
                                        <li className="ml-6 inline-grid">
                                                <a href="# " className="text-slate-50 hover:text-yellow-400">

                                                        Canlı Ders
                                                </a>
                                        </li>
                                </ul>
                        </div>
                </div>
        );
};

export default Footer;