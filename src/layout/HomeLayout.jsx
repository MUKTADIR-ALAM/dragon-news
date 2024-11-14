import React from 'react'
import Header from '../components/Header'
import LatestNews from '../components/LatestNews'
import Navbar from '../components/Navbar'

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
        <main className='w-11/12 mx-auto mt-5'>
            <aside>Left Navbar</aside>
            <section>Main Content</section>
            <aside>Right Navbar</aside>
        </main>
    </div>
  )
}
