import React from 'react';
import Image from 'next/image';
export const Gallery = () => {
  return (
    <div className="mx-auto h-78 bottom-8 -mt-32 bg-gradient-to-b from-sky-900 via-rose-400 to-yellow-400  pb-10  px-6  py-12 lg:7/12 after:lg:py-0">
      <div className=" w-78 my-28  mt-10 mx-1 mb-10 absolute mh-96  md:mw-10 lg:mw-10 rounded-2xl border   p-5 relative md:rounded-2xl border border-gray-700 border-opacity-70 bg-gray-900 bg-opacity-20 backdrop-blur-xl shadow-2xl lg:w-3/5 lg:mx-auto">
        <div className="px-6">
          <h2 className=" mb-10 m-auto text-center font-bold  text-3xl lg:text-3x1 md:text-4xl text-white ">
            {' '}
            Student <br />
            Co-ordinator
          </h2>{' '}
          <img
            alt="..."
            src="https://i.postimg.cc/DzNZrjNm/82363001-788138228328356-1081531952570831584-n.jpg"
            className="shadow-lg border-4 border-white rounded-full max-w-full mx-auto  h-52 w-52 object-cover"
          />{' '}
          <div className="mt-5 text-center">
            {' '}
            <h5 className="text-3xl font-bold dark:text-white">
              {' '}
              Skanda N
            </h5>{' '}
            <p className=" mx-5 pt-0 ml-4 mt-4 dark:text-white">
               +91 6362573520
            </p>
            <div className="mt-6">
              {' '}
              <button
                className="bg-orange-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                type="button"
              >
                {' '}
                <i className="fab fa-twitter" />
              </button>
              <button
                className="bg-pink-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                type="button"
              >
                {' '}
                <i className="fab fa-facebook-f" />
              </button>
              <button
                className="bg-purple-800 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                type="button"
              >
                {' '}
                <i className="fab fa-dribbble" />{' '}
              </button>{' '}
            </div>{' '}
          </div>{' '}
        </div>{' '}
      </div>
    </div>
  );
};
