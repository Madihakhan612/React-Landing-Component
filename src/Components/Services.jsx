import React, { useState } from 'react'
import card1 from "../assets/card 1.jpeg"
import card2 from "../assets/card 2.jpeg"
import card3 from "../assets/card 3.jpeg"
import card4 from "../assets/card 4.jpeg"

export const Services = () => {
    let [isZoomed, setIsZoomed] = useState(false);
    return (
        <>
            <section className="bg-slate-50 text-slate-900 body-font">
                <div className="container px-5 py-12 md:py-16 mx-auto">
                    <div className="flex flex-col text-center w-full mb-10">
                        <h6 className="title-font sm:text-4xl text-3xl mb-4 font-semibold text-sky-500">WHAT WE DO</h6>
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-slate-900 leading-tight mb-6">Creative Solutions for Your
                            <span className="text-sky-500">Digital Success</span>
                        </h1>
                        <p className="mb-8 leading-7 text-slate-600">We provide innovative digital solutions to help businesses build a strong online presence. Our services combine creativity, technology, and strategy to deliver meaningful results.</p>
                    </div>
                    <div className="flex flex-wrap -m-4">
                        <div className="p-4 lg:w-1/2">
                            <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left bg-white border border-slate-200 hover:shadow-xl rounded-2xl p-6">
                                <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src={card1}
                                    onMouseEnter={() => setIsZoomed(true)}
                                    onMouseLeave={() => setIsZoomed(false)}
                                    style={{
                                        cursor: "pointer",
                                        transition: "transform 0.3 ease-in-out",
                                        transform: isZoomed ? "scale(1.15)" : "scale(1)",
                                    }} />

                                <div className="flex-grow sm:pl-8">
                                    <h2 className="title-font font-medium text-lg text-slate-900">Web Development</h2>

                                    <p className="mb-4 text-slate-600 mt-3">We build responsive and high-performing websites tailored to your business needs.</p>

                                </div>
                            </div>
                        </div>
                        <div className="p-4 lg:w-1/2">
                            <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left bg-white border border-slate-200 hover:shadow-xl rounded-2xl p-6">
                                <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src={card2}
                                    onMouseEnter={() => setIsZoomed(true)}
                                    onMouseLeave={() => setIsZoomed(false)}
                                    style={{
                                        cursor: "pointer",
                                        transition: "transform 0.3 ease-in-out",
                                        transform: isZoomed ? "scale(1.15)" : "scale(1)",
                                    }} />
                                <div className="flex-grow sm:pl-8">
                                    <h2 className="title-font font-medium text-lg text-slate-900">UI/UX Design</h2>
                                    <p className="mb-4 text-slate-600 mt-3">We create attractive and user-friendly designs that make digital experiences simple and engaging.</p>

                                </div>
                            </div>
                        </div>
                        <div className="p-4 lg:w-1/2">
                            <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left bg-white border border-slate-200 hover:shadow-xl rounded-2xl p-6">
                                <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src={card3}
                                    onMouseEnter={() => setIsZoomed(true)}
                                    onMouseLeave={() => setIsZoomed(false)}
                                    style={{
                                        cursor: "pointer",
                                        transition: "transform 0.3 ease-in-out",
                                        transform: isZoomed ? "scale(1.15)" : "scale(1)",
                                    }} />
                                <div className="flex-grow sm:pl-8">
                                    <h2 className="title-font font-medium text-lg text-slate-900">App Development</h2>

                                    <p className="mb-4 text-slate-600 mt-3">We ensure your website looks beautiful and works smoothly on mobiles,tablets, and desktops.</p>

                                </div>
                            </div>
                        </div>
                        <div className="p-4 lg:w-1/2">
                            <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left bg-white border border-slate-200 hover:shadow-xl rounded-2xl p-6">
                                <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src={card4}
                                    onMouseEnter={() => setIsZoomed(true)}
                                    onMouseLeave={() => setIsZoomed(false)}
                                    style={{
                                        cursor: "pointer",
                                        transition: "transform 0.3 ease-in-out",
                                        transform: isZoomed ? "scale(1.15)" : "scale(1)",
                                    }} />

                                <div className="flex-grow sm:pl-8">
                                    <h2 className="title-font font-medium text-lg text-slate-900">Digital Strategy</h2>
                                    <p className="mb-4 text-slate-600 mt-3">We turn creative ideas into digital practical digital solutions using modern technologies.</p>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>


        </>
    )
}
export default Services