"use client"
import { UserButton } from "@clerk/nextjs"
import React, { useState } from 'react';
import Link from 'next/link';

const Header = () => {
  const [dogru, Setdogru] = useState(false)
  const myfuck = (e) => {
    Setdogru(!dogru)
  }
  const [renkdegis, Setrenkdegis] = useState(false)
  const Mousenter = () => {
    Setrenkdegis(true)
    console.log('geldi');
  }
  const Mouseout = () => {
    Setrenkdegis(false)
    console.log('gelmedi');
  }
  return (
    <header onMouseMove={Mousenter} onMouseLeave={Mouseout} className={renkdegis ? "bg-indigo-600 flex" : "bg-indigo-400  flex"}>
      <nav id="nav" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="contents">
          <div id="sa" className="container" onClick={myfuck} >
            <div style={dogru ? { transform: "translate(0, 11px) rotate(-45deg)" } : {}} className="bar1"></div>
            <div style={dogru ? { opacity: "0" } : {}} className="bar2"></div>
            <div style={dogru ? { transform: "translate(0, -11px) rotate(45deg)" } : {}} className="bar3"></div>
          </div>
          <Link className="text-slate-50 hover:text-yellow-400" href={"/"}>
            <img className="ml-2" id="logo" src="https://i.ibb.co/ZSd3DV9/Ba-l-ks-z-3.png" alt="Distance Education" />
          </Link>
          <div id="head">

            <ul className="block place-content-between">
              <li className=" inline-grid">
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
          <div id="Profile" className="float-right ml-32">
            <UserButton
              afterSignOutUrl='/'
            />
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;