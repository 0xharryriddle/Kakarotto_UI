"use client";
import React from 'react'
import Nav from './Nav'
import NavItems from '../Login/NavItems';

const Header = () => {
    return (
        <header className="top-0 z-30 transition-all sticky bg-gray-900 text-2xl text-primary w-full">
            <div className="container mx-auto relative px-10 py-5">
                <div className="flex flex-row justify-between items-center">
                    <Nav />
                    <NavItems />
                </div>
            </div>
        </header>
    )
}

export default Header