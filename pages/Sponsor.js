import React from 'react';

export default function Sponsor() {
  return (
    <center>
      <div className=" w-full min-h-screen pb-[5rem]  bg-gradient-to-r from-green-300 via-yellow-300 to-pink-300">
        <h5 className=" pt-10  text-3xl mb-5 sm:pt-10 text-black font-bold text-center text-gray-300 group-hover:text-white lg:full sm:w-full lg:text-4xl  lg:py-10">
          SPONSOR
        </h5>
        <div className="mt-5 w-11/12 bg-white-200 lg:-mt-10 rounded-xl sm:w-7/12 md:w-11/12 bg-black bg-opacity-70 border-gray-100 shadow-md  dark:border-gray-500 xl:w-7/12">
          <a href="https://www.sulekha.com/wizdom-ed-mangalore-collectorate-mangalore-contact-address">
            <img
              className="rounded-t-lg pt-5 "
              src="https://i.postimg.cc/JhpVPLcb/image-removebg-preview-2.png"
              alt=""
            />
          </a>
          <div className="p-5">
            <a href="https://www.sulekha.com/wizdom-ed-mangalore-collectorate-mangalore-contact-address">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                WiZdom Ed{' '}
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-300">
              At WiZdom Ed (WE Academy), we are a team of dedicated trainers
              with strong experience in education, training and coaching
              students planning their higher education; in India or abroad. We
              help our students in gaining the best scores in language and
              competitive entrance tests. Our focus areas including training
              students who are looking forward to better their scores in English
              Proficiency Tests like IELTS, TOEFL and PTE. Our test prep
              training includes GRE, SAT and GMAT.
            </p>
            <a
              href="https://www.sulekha.com/wizdom-ed-mangalore-collectorate-mangalore-contact-address"
              className="inline-flex mt-3 items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Know more
              <svg
                aria-hidden="true"
                className="ml-2 -mr-1 w-4 h-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </center>
  );
}
