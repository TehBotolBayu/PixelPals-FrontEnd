import React from 'react'
import {Header, TagCard, BottomNav} from "@/components";

const mockKategori:string[] = [
    'hh',
    'ww',
]

function Layout({
    children
} : {
    children: React.ReactNode
}) {
  return (
    <>
        <div className="bg-home">
            <Header />
            <nav className='kategori'>
            <TagCard kategori={'All'} url='' /> 
            {
                mockKategori.map((e, i) =>  
                <TagCard kategori={e} url={'/'+e} key={1} /> 
                )
            }
            </nav>
            {children}
        </div>
        <BottomNav/>
    </>
  )
}

export default Layout