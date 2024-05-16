'use client';
import React from 'react';
import Link from 'next/link';
import Navbar from "./Navbar"
import module from "./header.module.css"



export default function Header() {
  return (
    <div>
      <header className={module.header }>
        <Navbar />

        <div  className={module.right}>
            <Link href='/login' className={module.btn}>Login</Link>
            <Link href='/register' className={module.btn}>Register</Link>
        </div>
      </header>
    </div>
  )
}
