import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa"

export const Contact = () => {
    return (
        <>
            <section class="min-h-screen bg-slate-50 text-slate-900 body-font relative">
                <div className="container max-w-7xl mx-auto flex px-5 py-20 md:flex-row flex-col items-center" text-center>
                    {/* Contact Heading */}
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h6 className="title-font sm:text-4xl text-3xl mb-4 font-semibold text-sky-500">GET IN TOUCH</h6>

                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-slate-900 leading-tight">Let's Build Something
                            <span className="text-sky-500">Amazing Together.</span>.</h1>
                        <p className="mb-8 leading-7 text-slate-600 mt-6">Have a project in mind or need a digital solution?
                            We'd love to hear from you. Get in touch with us
                            and let's turn your ideas into reality.</p>


                        {/* Contact Information */}
                        <div className="w-full mt-8">

                            <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">
                                Contact Information
                            </h2>

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-5">

                                {/* Email Card */}
                                <div className="group bg-white flex flex-row item-center border border-blue-100 hover:border-sky-400 hover:shadow-xl rounded-2xl p-6 transition-all duration-300 hover:-translate-y-2">
                                    <div className="w-14 h-14 bg-sky-100 rounded-full flex items-center justify-center mb-5 group-hover:bg-sky-500 transition">
                                        <FaEnvelope className="text-sky-500 text-2xl group-hover:text-white" />
                                    </div>

                                    <div className="flex flex-col items-start text-left">
                                        <h3 className="text-slate-900 text-lg font-bold mb-2">
                                            Email Address
                                        </h3>

                                        <p className="text-sky-600 font-semibold text-sm break-all">
                                            hello@blockify.com
                                        </p>
                                    </div>
                                </div>

                                {/* Phone Card */}
                                <div className="group bg-white flex flex-row item-center border border-blue-100 hover:border-sky-400 hover:shadow-xl rounded-2xl p-6 transition-all duration-300 hover:-translate-y-2">
                                    <div className="w-14 h-14 bg-sky-100 rounded-full flex items-center justify-center mb-5 group-hover:bg-sky-500 transition">
                                        <FaPhone className="text-sky-500 text-2xl group-hover:text-white" />
                                    </div>

                                    <div className="flex flex-col items-start text-left">
                                        <h3 className="text-slate-900 text-lg font-bold mb-2">
                                            Phone Number
                                        </h3>

                                        <p className="text-sky-600 font-semibold text-sm">
                                            +92 300 1234567
                                        </p>
                                    </div>
                                </div>

                                {/* Location Card */}
                                <div className="group bg-white flex flex-row item-center border border-blue-100 hover:border-sky-400 hover:shadow-xl rounded-2xl p-6 transition-all duration-300 hover:-translate-y-2">
                                    <div className="w-14 h-14 bg-sky-100 rounded-full flex items-center justify-center mb-5 group-hover:bg-sky-500 transition">
                                        <FaMapMarkerAlt className="text-sky-500 text-2xl group-hover:text-white" />
                                    </div>

                                    <div className="flex flex-col items-start text-left">
                                        <h3 className="text-slate-900 text-lg font-bold mb-2 text-center">
                                            Our Location
                                        </h3>



                                        <p className="text-sky-600 font-semibold text-sm text-center">
                                            Karachi, Pakistan
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    {/* Contact Form */}
                    <div className="w-full bg-white border border-slate-200 rounded-2xl p-8 flex flex-col shadow-sm hover:shadow-2xl transition-all duration-300 hover:translate-y-2">

                        <h2 className="text-slate-900 text-2xl mb-2 font-bold">
                            Send Us a Message
                        </h2>

                        <p className="leading-relaxed mb-6 text-slate-600">
                            Have a project in mind? We'd love to hear from you.
                            Send us a message and let's connect.
                        </p>

                        <div className="relative mb-5">
                            <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                                Your Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Enter your name"
                            
                                className="w-full bg-white rounded-xl p-3 border border-slate-300 focus:border-sky-500 focus:ring-2 focus:ring-sky-100 text-base outline-none text-slate-700 py-3 px-4 transition"
                                
                                
                            />
                        </div>

                        <div className="relative mb-5">
                            <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                                Your Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Enter your email"
                                className="w-full bg-white rounded-lg border border-slate-300 focus:border-sky-500 focus:ring-2 focus:ring-sky-100 text-base outline-none text-slate-700 py-3 px-4 transition"
                            />
                        </div>

                        <div className="relative mb-5">
                            <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-2">
                                Subject
                            </label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                placeholder="Enter subject"
                                className="w-full bg-white rounded-lg border border-slate-300 focus:border-sky-500 focus:ring-2 focus:ring-sky-100 text-base outline-none text-slate-700 py-3 px-4 transition"
                            />
                        </div>

                        <div className="relative mb-6">
                            <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                                Your Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                placeholder="Write your message..."
                                rows="5"
                                className="w-full bg-white rounded-lg border border-slate-300 focus:border-sky-500 focus:ring-2 focus:ring-sky-100 text-base outline-none text-slate-700 py-3 px-4 resize-none transition"
                            ></textarea>
                        </div>

                        <button
                            type="button"
                            className="text-white bg-sky-500 hover:bg-sky-600 py-3 px-6 rounded-lg text-base font-semibold transition duration-300"
                        >
                            Send Message
                        </button>

                        <p className="text-sm text-slate-500 mt-4">
                            We'd be happy to hear from you!
                        </p>

                    </div>
                </div>
            </section >
        </>
    )
}
export default Contact