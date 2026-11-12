import React, { useState } from 'react'
import hero from "../assets/hero.jpeg"
import "../App.css"

export const Hero = () => {

    let [isZoomed, setIsZoomed] = useState(false);
    const handleClickIn = (event) =>{
        setIsZoomed(true);
      
    };
    const handleClickOut =(event) =>{
        setIsZoomed(false);
    };
    return (
        <>
            <section className="bg-slate-50 text-slate-900 body-font">
                <div className="container mx-auto flex px-5 py-12 md:py-16 md:flex-row flex-col items-center">
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <p className="title-font sm:text-4xl text-3xl mb-4 font-semibold text-sky-500">WELCOME TO BLOCKIFY</p>
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-slate-900 leading-tight">Build Youe Ideas Into
                            <span className="text-sky-500">Digital Experiences</span>.</h1>
                        <p className="mb-8 leading-7 text-slate-600 mt-6">We transform creative ideas into powerful digital experinces. From stunning websites to innovative solutions, we help businesses grow in the digital world.</p>
                        <div className="flex flex-row gap-4 mt-8 md:justify-start justify-center items-center">

                            <button className="bg-sky-500 hover:bg-sky-600 text-white font-semibold py-3 px-6 rounded-lg whitespace-nowrap">Explore Our Services</button>
                            <button className="bg-sky-500 hover:bg-sky-600 text-white font-semibold py-3 px-6 rounded-lg whitespace-nowrap">Let's Talk</button>
                        </div>
                        <h6 className="text-lg font-semibold text-gray-800 mt-4">Trust Points:</h6>
                        <ul className="list-disc list-inside text-slate-700 mt-8 space-y-3">
                            <li>Creative Thinking</li>
                            <li>Modern Technology</li>
                            <li>Quality Solutions</li>
                        </ul>
                    </div>
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 hover:zoom">
                        <img className="object-cover object-center rounded-2xl w-full" alt="Digital Agency" src= {hero}  
                        onMouseOver={handleClickIn} 
                        onMouseOut={handleClickOut} 
                        style={{cursor: "pointer",
                        transition:"transform 0.3 ease-in-out",
                        transform: isZoomed? "scale(1.25)" :"scale(1)",}}/>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero
