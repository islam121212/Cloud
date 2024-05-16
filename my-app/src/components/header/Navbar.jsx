'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import module from "./header.module.css"
import { GrTechnology } from "react-icons/gr";
import { CiMenuBurger } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";


export default function Navbar() {
    const [toggle,setToggle] = useState(true);
  return (
    <div>
      <nav className={module.navbar}>
            <div> 
                <Link href="/" className={module.logo}>Cloud 
                <GrTechnology />
                Hosting</Link>

                <div className={module.menu}>
          

{toggle ? (<IoMdClose onClick={() => setToggle(prev => !prev)}/>) : (<CiMenuBurger onClick={() => setToggle(prev => !prev)}/>)}
                </div>
            </div>
            
            <div className={module.navLinksWrappper} style={{clipPath: toggle && " polygon(0 0, 100% 0, 100% 100%, 0% 100%)" || ""}}>
            <ul className={module.navlinks}>
                <Link onClick={() => setToggle(false)} href="/" className={module.navlink}>Home</Link>
                <Link onClick={() => setToggle(false)} href="/articles" className={module.navlink}>Articles</Link>
                <Link onClick={() => setToggle(false)} href="/about" className={module.navlink}>About</Link>
                <Link onClick={() => setToggle(false)} href="/admin" className={module.navlink}>Admin Dashboard</Link>
                
            </ul>
            </div>
        </nav>
    </div>
  )
}
