import React from 'react'
import logo from "../assets/logo.jpeg";
import "../App.css"

export const Navbar = () => {
  // let [isZoomed, setIsZoomed] = useState(false);
  // const ClickIn = (event) => {
  //   setIsZoomed(true);

  // };
  // const ClickOut = (event) => {
  //   setIsZoomed(false);
  // };

  return (
    <>
      <header className="bg-slate-50 text-slate-900 body-font shadow-sm">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">

          {/* Logo Container */}
          <a
            href="/"
            className="flex title-font font-bold items-center mb-4 md:mb-0"
          >
            <div className="w-12 h-12 flex items-center justify-center bg-white rounded-xl shadow-md border border-blue-100 overflow-hidden hover:shadow-lg transition-all duration-300">

              <img
                src={logo}
                alt="Blockify Logo"
                // onMouseOver={ClickIn}
                // onMouseOut={ClickOut}
                // // style={{
                // //   cursor: "pointer",
                // //   transition: "transform 0.3 ease-in-out",
                // //   transform: isZoomed ? "scale(1.25)" : "scale(1)",
                // // }}

              />

            </div>

            <span className="ml-3 text-2xl font-extrabold tracking-tight text-slate-900">
              Block<span className="text-blue-600">ify</span>
            </span>
          </a>

          {/* Navigation Links */}
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center gap-6">

            <a href="#home" className="font-medium text-blue-600 hover:text-blue-700 transition duration-300">
              Home
            </a>

            <a href="#about" className="font-medium text-slate-600 hover:text-blue-600 transition duration-300">
              About
            </a>

            <a href="#services" className="font-medium text-slate-600 hover:text-blue-600 transition duration-300">
              Services
            </a>

            <a href="#contact" className="font-medium text-slate-600 hover:text-blue-600 transition duration-300">
              Contact
            </a>

          </nav>

          {/* Get Started Button */}
          <button className="inline-flex items-center bg-sky-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">

            Get Started

            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-4 h-4 ml-2"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>

          </button>

        </div>
      </header>
    </>
  )
}
export default Navbar