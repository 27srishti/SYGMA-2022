import Link from 'next/link';
export const Events = () => {
  return (
    <div className="bg-[#020314]">
      <h2 className="lg:w-7/12 m-auto text-center font-bold text-3xl md:text-5xl text-white mt-8 mb-16 ">
        {' '}
        SYGMA 2022- EVENTS
      </h2>{' '}
      <div
        className=" h-7/12 -top-32 relative overflow-auto pb-32  px-6 lg:overflow-x-hidden py-12 lg:7/12 after:lg:py-0"
        id="Events"
        href="#Events"
      >
        <div className="pt-[5rem] w-max flex grid-cols-3 -space-x-6 text-white tracking-wide sm:space-x-0 sm:gap-6 lg:w-full lg:grid px-0">
          <div>
            <div className="w-10/12 p-3 rounded-xl border bg-white bg-opacity-5 border-opacity-5 group sm:w-full">
              <Link href="/Coding">
                <a
                  title="Browse Hero Section blocks"
                  aria-label="Browse Hero Section blokcs"
                  className="h-full pb-4 relative block bg-gray-800 bg-opacity-60 rounded-xl hover:bg-opacity-50 hover:bg-black active:bg-opacity-90 focus:bg-opacity-80 transition"
                >
                  <img
                    src="https://i.postimg.cc/cLt7V59d/coding.png"
                    className="m-auto"
                    alt="Hero Section"
                  />
                  <h5 className="-mt-1 text-xl text-center text-gray-300 group-hover:text-white">
                    Virtual Wizard <br />
                    (Coding and Debugging)
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
                    Ingenious <br /> (Web Development)
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
                    Bravado <br />
                    (IT Chaser)
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
                    (Photography & Video)
                  </h5>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
