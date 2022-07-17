import React from "react";
import { About } from "../components/about";
import { Events } from "../components/Events";
import { Gallery } from "../components/Gallery";
import { Faq } from "../components/Faq";
import { Footer } from "../components/Footer";
import { Sponsors } from "../components/Sponsors";
import Link from "next/link";
import { useState } from "react";
import { Transition } from "@headlessui/react";
import Image from "next/image";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    
    <section className="  dark:bg-gray-800 ">
      <div>
        
        <nav className="bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className=" w-10 flex items-center h-16">
              <div className="flex items-center">
                <div className="hidden md:block">
                <center>
                  <div className="ml-96 flex items-baseline space-x-12"><Link
                    
                      href="#"
                      className=" hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium"
                    >
                      Home
                  
                    </Link>
                    <Link
                    
                      href="#About"
                      className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    >
                      About
                    </Link>
                    <Link
                      href="/Events"
                      className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    >
                      Events
                    </Link>
                    {/* <Link
                      href="#"
                      className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    >
                      Sponsors
                    </Link> */}
                    <Link
                      href="#"
                      className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    >
                      Gallery
                    </Link>{" "}
                    <Link
                      href="#"
                      className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    >
                      Contact
                    </Link>
                  </div></center>
                </div>
              </div>
              <div className="-mr-2 flex md:hidden">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  type="button"
                  className="  inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                  aria-controls="mobile-menu"
                  aria-expanded="false"
                >
                  <span className="sr-only">Open main menu</span>
                  {!isOpen ? (
                    <svg
                      className="block h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="block h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>

          <Transition
            show={isOpen}
            enter="transition ease-out duration-100 transform"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="transition ease-in duration-75 transform"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            {(ref) => (
              <div className="md:hidden" id="mobile-menu">
                <div ref={ref} className=" px-2 pt-2 pb-3 space-y-1 sm:px-3">
                  <a
                    href="#"
                    className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium"
                  >
                    About
                  </a>

                  <Link
                    href="/Events"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                  >
                    Events
                  </Link>

                  {/* <a
                    href="#"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                  >
                    Sponsors
                  </a> */}

                  <a
                    href="#"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                  >
                    Gallery
                  </a>

                  <a
                    href="#"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                  >
                    Contact
                  </a>
                </div>
              </div>
            )}
          </Transition>
        </nav>

        <main>
          <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            {/* <!-- Replace with your content --> */}

            {/* <!-- /End replace --> */}
          </div>
        </main>
      </div>

      {/* ----------------------Hero section------------------------------------------------------------------- */}
      <div className="  container px-6 py-1 mx-auto text-center">
      
    
        <div className="max-w-lg mx-auto">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white md:text-4xl">
            SYGMA 2022 - MELIORA
          </h1>
          <h1 className="text-x1 p-5 text-gray-800 dark:text-white md:text-2xl">
            Persuit Of Betterness
          </h1>

          
          <div className="w-full max-w-sm mx-auto mt-6  dark:border-gray-600  focus-within:ring-blue-300 dark:focus-within:border-blue-300 focus-within:ring-opacity-40">
            <a
              type="button"
              className="h-10 px-4 py-2 m-1 text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400"
              href="/Reg"
            >
              Register Now
            </a>
          </div>
        </div>
        <div className="h-48 max-w-screen-xl mx-auto mb-8"></div>
      </div>
      {/* // ---------- <about------------ /> */}
      <About />
      {/* // ---------- <sponsors------------ /> */}
      {/* <Sponsors /> */}

      {/* // ---------- <Events------------ /> */}
      <Events />
      {/* // ---------- <gallery------------ /> */}
      <Gallery />
      {/* // ---------- <faq's------------ /> */}
      <Faq />
      {/* // ---------- <footer------------ /> */}
      <Footer />
      
    </section>
  );
}
export default Nav;
