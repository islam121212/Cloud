import React from 'react';
import Link from 'next/link';
import { GrTechnology } from "react-icons/gr";
import module from "./header.module.css"

export default function Header() {
  return (
    <div>
      <header className={module.header }>
        <nav className={module.navbar}>
            <div> 
                <Link href="/" className={module.logo}>Cloud 
                <GrTechnology />
                Hosting</Link>
            </div>
            <ul className={module.navlinks}>
                <Link href="/" className={module.navlink}>Home</Link>
                <Link href="/articles" className={module.navlink}>Articles</Link>
                <Link href="/about" className={module.navlink}>About</Link>
                <Link href="/admin" className={module.navlink}>Admin Dashboard</Link>
                
            </ul>
        </nav>

        <div  className={module.right}>
            <Link href='/login' className={module.btn}>Login</Link>
            <Link href='/register' className={module.btn}>Register</Link>
        </div>
      </header>
    </div>
  )
}
