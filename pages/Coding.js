import React from "react";
import Link from "next/link";
import { useState } from 'react';
import { Transition } from '@headlessui/react';
export default function Events() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <div className="    group  lg:10 sm:w-full  ">
      
        <Link href="/Coding">
          <a
            title="Browse Hero Section blocks"
            aria-label="Browse Hero Section blokcs"
            className="h-full pb-4 relative block  bg-[#0a0c2c]  active:bg-opacity-90 focus:bg-opacity-80 transition"
          >
            {" "}<div>
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
                    {/* <Link
                      href="#"
                      className="text-gray-300 hover:bg-gray-900 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    >
                      Sponsors
                    </Link> */}
                    <Link href="/#Faq">
                      <a className="text-gray-300 hover:bg-gray-900 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                        FAQ`s
                      </a>
                    </Link>{' '}
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
                <a
                  href="/Home"
                  className=" text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Home
                </a>
                <a
                  href="#About"
                  className=" text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  About
                </a>
                <Link href="/Events">
                  <a className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
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
                  className="text-gray-300  hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  FAQ`s
                </a>

                <a
                  href="#Footer"
                  className="text-gray-300  hover:text-white block px-3 py-2 rounded-md text-base font-medium"
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
            <div className=" top-20 py-5 rounded-2xl border border-white-700 border-opacity-70  text-start  mx-auto w-10/12 lg:top-40 px-6 md:px-10 lg:px-16 xl:px-20 relative md:rounded-2xl border border-white-700 border-opacity-70 sm:rounded-2xl border border-white-700 border-opacity-70 bg-gray-900 bg-opacity-20 backdrop-blur-xl shadow-2xl  md:-mt-20 lg:-mt-24 xl:-mt-32 transition duration-700 group-hover:scale-95">
              <h5 className="     text-3xl  text-center text-gray-300 group-hover:text-white lg:full sm:w-full lg:text-4xl  lg:py-10">
                Virtual Wizard <br />
                (Coding and Debugging)
              </h5>
              <br />
              <h5 className=" mt-1 px-5 text-xl text-start text-gray-300 group-hover:text-white lg:full sm:w-full lg:px-20">
                Description:
              </h5>
              <h1 className="px-10 text-start lg:px-28 lg:full sm:w-full">
                Coding is the ability to control and change the way things in
                the world work around you and this event is the best opportunity
                to showcase your abilities of coding. Here your knowledge,
                skills, logic and creativity are tested.
              </h1>
              <br />
              <h5 className="-mt-1 px-5 text-xl text-start text-gray-300 group-hover:text-white lg:px-20 lg:full sm:w-full">
                Rules:
              </h5>
              <h5 className="px-10 lg:px-28  lg:full sm:w-full">
                {" "}
                - Participants can choose languages like C, C++, Java, Python.{" "}
                <br />- Participants should be familiar with Competitive
                Programming.
              </h5>
              <br />{" "}
              <h5 className="mt-1 px-5 text-xl text-start text-gray-300 group-hover:text-white lg:px-20 lg:full sm:w-full">
                Co-ordinators:
              </h5>
              <h5 className="px-10 lg:px-28  lg:full sm:w-full">
                Charith- 9632825359 <br />
                Rahul Devadiga- 8970895684
              </h5>
              <br />
            </div>
            <div className="lg:full">
              <br />
              <h5 className="mt-48 px-5 text-3xl text-start text-gray-300 group-hover:text-white lg:px-20 lg:full sm:w-full">
                Note:
              </h5>
              <h2 className="px-16 lg:w-full m-auto text-start text-1xl md:text-base  text-white mt-8 mb-16">
                {" "}
                - All the events are Individual events. The registrants can only
                participate in a single event. Total of 6 make a team and
                participants are required to be in formals on the day of the
                fest.
                <br /> - A team has to participate in all the events to be in
                the contention for the Overall Championship.
                <br /> - Registration has to be done through our website
                https://sygma.sdm.ac.in. Registration fee of Rs. 300/- per team
                shall be payable ON SPOT. <br /> - The fest is open to all the
                Computer Science and Compute Application students.
                <br /> - Teams have to confirm their participation via email or
                through call to the in charge student coordinator. Email -
                sygma@sdmcbm.ac.in. <br /> - Participants are requested to
                produce their identity cards and Bonafide Certificate at the
                time of registration.
                <br /> - Punctuality and discipline are of primary concern.{" "}
                <br />
                - Team will refrain from smoking, drugs, alcohol consumption and
                misbehavior. Students indulging in such unacceptable behavior
                shall be disqualified. <br />- The decisions of the judges will
                be final and binding by/to all regards.
              </h2>{" "}
            </div>
            <br />
          </a>
        </Link>
      </div>
    </div>
  );
}
