import React from "react";
import Link from "next/link";
import { useState } from "react";
import { Transition } from "@headlessui/react";
export default function Events() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className=" h-full -mt-10 py-10 px-10 bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900">
      <div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className=" w-10 flex items-center h-16">
            <div className="flex items-center">
              <div className="hidden md:block">
                <center>
                  <div className="  ml-96 flex items-baseline space-x-12  ">
                    <Link href="/">
                      <a className=" hover:bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium">
                        Home
                      </a>
                    </Link>
                    <Link href="/#About">
                      <a className="text-gray-300 hover:bg-gray-900 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                        About
                      </a>
                    </Link>
                    <Link href="/#Events">
                      <a className="text-gray-300 hover:bg-gray-900 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                        Events
                      </a>
                    </Link>
                    <Link href="/Sponsor">
                  <a className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                    Sponsor
                  </a>
                </Link>
                    <Link href="/#Faq">
                      <a className="text-gray-300 hover:bg-gray-900 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                        FAQ`s
                      </a>
                    </Link>{" "}
                    <Link href="/#Footer">
                      <a className="text-gray-300 hover:bg-gray-900 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                        Contact
                      </a>
                    </Link>
                  </div>
                </center>
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
                <Link href="/Home">
                  <a className=" text-white block px-3 py-2 rounded-md text-base font-medium">
                    Home
                  </a>
                </Link>
                <Link href="/#About">
                  <a className=" text-white block px-3 py-2 rounded-md text-base font-medium">
                    About
                  </a>
                </Link>
                <Link href="/Events">
                  <a className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                    Events
                  </a>
                </Link>

                <Link href="/Sponsor">
                  <a className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                    Sponsor
                  </a>
                </Link>
                <Link href="/#Faq">
                  <a className="text-gray-300  hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                    FAQ`s
                  </a>
                </Link>
                <Link href="/#Footer">
                  <a className="text-gray-300  hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                    Contact
                  </a>
                </Link>
              </div>
            </div>
          )}
        </Transition>

        <main>
          <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            {/* <!-- Replace with your content --> */}

            {/* <!-- /End replace --> */}
          </div>
        </main>
      </div>
      <h2 className="  lg:w-7/12 m-auto text-center font-bold text-3xl md:text-5xl text-white mt-8 mb-16 ">
        {" "}
        SYGMA 2022- EVENTS
      </h2>{" "}
      <div className=" py-12 grid justify-items-center py-10 py-0 relative overflow-x-auto -mx-10  bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900  lg:overflow-x-hidden py-12 lg:grid justify-items-center lg:py-10 lg:py-0">
        <center>
          <div className="  gap-6  grid  space-x-1 text-white tracking-wide sm:space-x-0 sm:gap-6 sm:grid-cols-1  -space-x-6  lg: w-full lg:grid ">
            <div>
              <div className="w-10/12 p-3 rounded-xl border bg-white bg-opacity-5 border-opacity-5 group sm:w-full  ">
                <Link href="/Coding">
                  <a
                    title="Browse Hero Section blocks"
                    aria-label="Browse Hero Section blokcs"
                    className="h-full pb-4 relative block  bg-gray-800  bg-opacity-60 rounded-xl hover:bg-opacity-50 hover:bg-black  active:bg-opacity-90 focus:bg-opacity-80 transition"
                  >
                    <img
                      src="https://i.postimg.cc/cLt7V59d/coding.png"
                      className="m-auto "
                      alt="Hero Section"
                    />

                    <h5 className="-mt-1 text-xl text-center text-gray-300 group-hover:text-white">
                      Virtual Wizard <br /> (Coding and Debugging)
                    </h5>
                  </a>
                </Link>
              </div>
            </div>
            <div>
              <div className="w-10/12 p-3 rounded-xl border bg-white bg-opacity-5 border-opacity-5 group sm:w-full">
                <Link href="/Web">
                  <a
                    title="Browse Logo Cloud blocks"
                    aria-label="Browse Logo Cloud blokcs"
                    className="h-full pb-4 relative block bg-gray-800 bg-opacity-60 rounded-xl hover:bg-opacity-50 hover:bg-black  active:bg-opacity-90 focus:bg-opacity-80 transition"
                  >
                    <img
                      src="https://i.postimg.cc/8zQt4S4h/web-design.png"
                      className="m-auto"
                      alt="Logo Cloud"
                    />
                    <h5 className="-mt-1 text-xl text-center text-gray-300 group-hover:text-white">
                      Ingenious <br />
                      (Web Development)
                    </h5>
                  </a>
                </Link>
              </div>
            </div>
            <div>
              <div className="w-10/12 p-3 rounded-xl border bg-white bg-opacity-5 border-opacity-5 group sm:w-full">
                <Link href="/Itchaser">
                  <a
                    title="Browse Services & Features blocks"
                    aria-label="Browse Services & Features blokcs"
                    className="h-full pb-4 relative block bg-gray-800 bg-opacity-60 rounded-xl hover:bg-opacity-50 hover:bg-black  active:bg-opacity-90 focus:bg-opacity-80 transition"
                  >
                    <img
                      src="https://i.postimg.cc/9frfxvJB/IT-Chaser.png"
                      className="m-auto"
                      alt="Services & Features"
                    />
                    <h5 className="-mt-1 text-xl text-center text-gray-300 group-hover:text-white">
                      Bravado <br /> (IT Chaser)
                    </h5>
                  </a>
                </Link>
              </div>
            </div>
            <div>
              <div className="w-10/12 p-3 rounded-xl border bg-white bg-opacity-5 border-opacity-5 group sm:w-full">
                <Link href="/It">
                  <a
                    title="Browse Content blocks"
                    aria-label="Browse Content blokcs"
                    className="h-full pb-4 relative block bg-gray-800 bg-opacity-60 rounded-xl hover:bg-opacity-50 hover:bg-black  active:bg-opacity-90 focus:bg-opacity-80 transition"
                  >
                    <img
                      src="https://i.postimg.cc/8zF8xNgs/IT-Quiz.png"
                      className="m-auto"
                      alt="Content"
                    />
                    <h5 className="-mt-1 text-xl text-center text-gray-300 group-hover:text-white">
                      Brainiac <br />
                      (IT Quiz)
                    </h5>
                  </a>
                </Link>
              </div>
            </div>
            <div>
              <div className="w-10/12 p-3 rounded-xl border bg-white bg-opacity-5 border-opacity-5 group sm:w-full">
                <Link href="/Paperp">
                  <a
                    title="Browse Team blocks"
                    aria-label="Browse Team blokcs"
                    className="h-full pb-4 relative block bg-gray-800 bg-opacity-60 rounded-xl hover:bg-opacity-50 hover:bg-black  active:bg-opacity-90 focus:bg-opacity-80 transition"
                  >
                    <img
                      src="https://i.postimg.cc/k4TfnRxC/Presentation.png"
                      className="m-auto"
                      alt="Team"
                    />
                    <h5 className="-mt-1 text-xl text-center text-gray-300 group-hover:text-white">
                      Call for Abstracts <br />
                      (Paper Presentation)
                    </h5>
                  </a>
                </Link>
              </div>
            </div>
            <div>
              <div className="w-10/12 p-3 rounded-xl border bg-white bg-opacity-5 border-opacity-5 group sm:w-full">
                <Link href="/Photograph">
                  <a
                    title="Browse Login blocks"
                    aria-label="Browse Login blokcs"
                    className="h-full pb-4 relative block bg-gray-800 bg-opacity-60 rounded-xl hover:bg-opacity-50 hover:bg-black  active:bg-opacity-90 focus:bg-opacity-80 transition"
                  >
                    <img
                      src="https://i.postimg.cc/B6nBwZRV/Photography.png"
                      className="m-auto"
                      alt="Login"
                    />
                    <h5 className="-mt-1 text-xl text-center text-gray-300 group-hover:text-white">
                      Shutterbug <br />
                      (Photography and Video)
                    </h5>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </center>
      </div>
    </div>
  );
}
