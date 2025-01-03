import React from 'react'
import Header from '../components/Header'
import LatestNews from '../components/LatestNews'
import Navbar from '../components/Navbar'
import LeftNavbar from '../components/layout-component/LeftNavbar'
import RightNav from '../components/layout-component/RightNav'
import { Outlet } from 'react-router-dom'

export default function HomeLayout() {
  return (
    <div className='font-poppins'>
        <header>
            <Header/>
            <section className='w-11/12 mx-auto'>
                <LatestNews />
            </section>
        </header>
        <nav className='w-11/12 mx-auto my-2'>
            <Navbar />
        </nav>
        <main className='w-11/12 mx-auto mt-5 grid md:grid-cols-12 gap-3'>
            <aside className='left col-span-3'><LeftNavbar/></aside>
            <section className='col-span-6'><Outlet/></section>
            <aside className='col-span-3'><RightNav /></aside>
        </main>
    </div>
  )
}
