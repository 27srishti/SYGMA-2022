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
    <section className=" bg-gradient-to-br from-red-800 via-yellow-600 to-yellow-500 ">
      <div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className=" w-10 flex items-center h-16">
            <div className="flex items-center">
              <div className="hidden md:block">
                <center>
                  <div className="  ml-96 flex items-baseline space-x-12  ">
                    <Link
                      href="#Home"
                      className=" hover:bg-gray-600 text-white px-3 py-2 rounded-md text-sm font-medium"
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
                      href="#Faq"
                      className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    >
                      FAQ`s
                    </Link>{" "}
                    <Link
                      href="#Footer"
                      className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    >
                      Contact
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
                <a
                  href="#About"
                  className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  About
                </a>

                <Link href="/Events">
                  <a className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                    Events
                  </a>
                </Link>

                {/* <a
                    href="#"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                  >
                    Sponsors
                  </a> */}

                <a
                  href="#Faq"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  FAQ`s
                </a>

                <a
                  href="#Footer"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Contact
                </a>
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
      {/* ----------------------Hero section------------------------------------------------------------------- */}
      <div className="   container px-6 py-1 mx-auto text-center" id="Home">
        <center>
          <img
            src="https://i.postimg.cc/CLK3kHyn/Slide-4-3-15-1.png"
            className=" -mt-10 h-60 w-60"
            alt="Hero Section"
          />
        </center>
        <div className="max-w-lg mx-auto">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white md:text-4xl">
            SYGMA 2022 - MELIORA
          </h1>
          <h1 className="text-x1 p-5 text-gray-800 dark:text-white md:text-2xl">
            Persuit Of Betterness
          </h1>

          <div className="w-full max-w-sm mx-auto mt-6  dark:border-gray-600  focus-within:ring-blue-300 dark:focus-within:border-blue-300 focus-within:ring-opacity-40">
            <Link href="/Reg">
              <a
                type="button"
                className="h-10  px-4 py-2 m-1 text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400"
              >
                Register Now
              </a>
            </Link>
          </div>
        </div>
        <div className="h-5 max-w-screen-xl mx-auto "></div>
      </div>{" "}
      <div className=" relative -bottom-16 sm:-bottom-16  xl:bottom-16 lg:bottom-16">
        <svg
          viewBox="1 0 1428 174"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
            <g
              transform="translate(-2.000000, 44.000000)"
              fill="#081e47"
              fillRule="nonzero"
            >
              <path
                d="M0,0 C90.7283404,0.927527913 147.912752,27.187927 291.910178,59.9119003 C387.908462,81.7278826 543.605069,89.334785 759,82.7326078 C469.336065,156.254352 216.336065,153.6679 0,74.9732496"
                opacity="0.100000001"
              />
              <path
                d="M100,104.708498 C277.413333,72.2345949 426.147877,52.5246657 546.203633,45.5787101 C666.259389,38.6327546 810.524845,41.7979068 979,55.0741668 C931.069965,56.122511 810.303266,74.8455141 616.699903,111.243176 C423.096539,147.640838 250.863238,145.462612 100,104.708498 Z"
                opacity="0.100000001"
              />
              <path
                d="M1046,51.6521276 C1130.83045,29.328812 1279.08318,17.607883 1439,40.1656806 L1439,120 C1271.17211,77.9435312 1140.17211,55.1609071 1046,51.6521276 Z"
                id="Path-4"
                opacity="0.200000003"
              />
            </g>
            <g
              transform="translate(-4.000000, 76.000000)"
              fill="#081e47"
              fillRule="nonzero"
            >
              <path d="M0.457,34.035 C57.086,53.198 98.208,65.809 123.822,71.865 C181.454,85.495 234.295,90.29 272.033,93.459 C311.355,96.759 396.635,95.801 461.025,91.663 C486.76,90.01 518.727,86.372 556.926,80.752 C595.747,74.596 622.372,70.008 636.799,66.991 C663.913,61.324 712.501,49.503 727.605,46.128 C780.47,34.317 818.839,22.532 856.324,15.904 C922.689,4.169 955.676,2.522 1011.185,0.432 C1060.705,1.477 1097.39,3.129 1121.236,5.387 C1161.703,9.219 1208.621,17.821 1235.4,22.304 C1285.855,30.748 1354.351,47.432 1440.886,72.354 L1441.191,104.352 L1.121,104.031 L0.457,34.035 Z" />
            </g>
          </g>
        </svg>
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
