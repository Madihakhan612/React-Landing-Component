import React, { useState } from 'react';
import pic from "../assets/about.jpeg";



export const About = () => {
    let [isZoomed, setIsZoomed] = useState(false);
    const handleClickIn = (event) => {
        setIsZoomed(true);

    };
    const handleClickOut = (event) => {
        setIsZoomed(false);
    };

    return (
        <>
            <section className="bg-slate-50 text-slate-900 body-font">
                <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
                    <img className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded-xl w-full h-full" src={pic} alt="hero"
                        onMouseOver={handleClickIn}
                        onMouseOut={handleClickOut}
                        style={{
                            cursor: "pointer",
                            transition: "transform 0.5 ease-in-out",
                            transform: isZoomed ? "scale(1.30)" : "scale(1)",
                        }} />
                    <div className="text-center lg:w-2/3 w-full">
                        <h6 className="title-font sm:text-4xl text-3xl mb-4 font-semibold text-sky-500">ABOUT BLOCKIFY</h6>

                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-slate-900 leading-tight mb-6">We Create Digital
                            <span className="text-sky-500">Experiences That Make a Difference</span>
                        </h1>
                        <p className="mb-8 leading-7 text-slate-600">At Blockify, we believe every great idea deserves a powerful digital presence. Our team combines creativity, technology, and innovation to build meaningful solutions that help brands stand out.</p>

                        <h6 className="text-lg font-semibold text-gray-800 mt-4">Highlights:</h6>
                        <ul className="list-disc list-inside text-slate-700 mt-8 space-y-3">
                            <li>Creative & Innovative Ideas</li>
                            <li>User-Focused Design</li>
                            <li>Reliable Digital Solutions</li>
                        </ul>
                        <div className="flex justify-center gap-4 mt-8">
                            <button className="inline-flex text-white bg-sky-500 border-0 py-3 px-6 focus:outline-none hover:bg-sky-600 rounded text-lg">Discover Our Story</button>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default About
