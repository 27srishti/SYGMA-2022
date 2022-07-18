import React from "react";
import Link from "next/link";
export default function Events() {
  return (
    <div>
      <div className="   group  lg:10 sm:w-full  ">
        <Link href="/paperp">
          <a
            title="Browse Hero Section blocks"
            aria-label="Browse Hero Section blokcs"
            className="h-full pb-4 relative block  bg-[#0a0c2c]   active:bg-opacity-90 focus:bg-opacity-80 transition"
          >
            {" "}
            <div className=" top-20 py-5 rounded-2xl border border-white-700 border-opacity-70  text-start  mx-auto w-10/12 lg:top-40 px-6 md:px-10 lg:px-16 xl:px-20 relative md:rounded-2xl border border-white-700 border-opacity-70 sm:rounded-2xl border border-white-700 border-opacity-70 bg-gray-900 bg-opacity-20 backdrop-blur-xl shadow-2xl  md:-mt-20 lg:-mt-24 xl:-mt-32 transition duration-700 group-hover:scale-95">
              <h5 className="     text-3xl  text-center text-gray-300 group-hover:text-white lg:full sm:w-full lg:text-4xl  lg:py-10">
                CALL FOR ABSTRACTS
                <br />
                (PAPER PRESENTATION)
              </h5>
              <br />
              <h5 className=" mt-1 px-5 text-xl text-start text-gray-300 group-hover:text-white lg:full sm:w-full lg:px-20">
                Description:
              </h5>
              <h1 className="px-10 text-start lg:px-28 lg:full sm:w-full">
                A man who moves a mountain begins by carrying away small stones’
                the phrases of Confucius. Paper presentation which is an IT
                event will be a small stone to achieve a mountain of success in
                terms of a well rounded career by the means of communication,
                creativity and presentation.
              </h1>
              <br />
              <h5 className="-mt-1 px-5 text-xl text-start text-gray-300 group-hover:text-white lg:px-20 lg:full sm:w-full">
                Rules:
              </h5>
              <h5 className="px-10 lg:px-28  lg:full sm:w-full">
                {" "}
                - Topics will be provided 2 days prior of the event. <br /> - On
                spot registration is not allowed. <br /> - Participants have to
                mail their presentation to :sygma.callforabstracts@gmail.com
              </h5>
              <br />{" "}
              <h5 className="mt-1 px-5 text-xl text-start text-gray-300 group-hover:text-white lg:px-20 lg:full sm:w-full">
                Co-ordinators:
              </h5>
              <h5 className="px-10 lg:px-28  lg:full sm:w-full">
                Manasa- 7019091175
                <br />
                Aishwarya- 8431894010
              </h5>
              <br />
            </div>
            <div className="lg:full">
              <br />
              <h5 className="mt-48 px-5 text-3xl text-center text-gray-300 group-hover:text-white lg:px-20 lg:full sm:w-full">
                Note
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
