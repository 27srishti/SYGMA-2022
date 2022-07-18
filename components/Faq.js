import React from 'react';

export const Faq = () => {
  return (
    <section
      className=" w-full  h-full bg-no-repeat bg-cover bg-center bg-fixed"
      style={{
        backgroundImage:
          'url("https://i.postimg.cc/PfF6mt64/Untitled-design.png")',
      }}
      id="Faq"
      href="#Faq"
    >
      <div className=" container flex flex-col justify-center px-4 py-28 -mt-32 mx-auto ">
        <h2 className="text-2xl font-Poppins -mt-20 py-10 dark:text-white font-semibold sm:text-4xl">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4 ">
          <details className=" mx-auto rounded-2xl border  p-5 relative md:rounded-2xl border border-gray-700 border-opacity-70 bg-gray-900 bg-opacity-40 backdrop-blur-xl shadow-2xl ">
            <summary className="px-4 py-6 dark:text-white focus:outline-none focus-visible:ring-violet-400">
              When to pay the registration fee?
            </summary>
            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-white">
              At the registration desk on the day of the event.
            </p>
          </details>
          <details className="mx-auto rounded-2xl border p-2 relative md:rounded-2xl border border-gray-700 border-opacity-70 bg-gray-900 bg-opacity-40 backdrop-blur-xl shadow-2xl ">
            <summary className="px-4 py-6 dark:text-white focus:outline-none focus-visible:ring-violet-400">
              What is the contention regulation for overall champions?
            </summary>
            <p className="px-4 py-6 pt-0 ml-4 dark:text-white -mt-4">
              A team has to participate in all of the events to be in contention
              for overall championship.
            </p>
          </details>
          <details className="mx-auto rounded-2xl border p-3 relative md:rounded-2xl border border-gray-700 border-opacity-70 bg-gray-900 bg-opacity-40 backdrop-blur-xl shadow-2xl ">
            <summary className="px-4 py-6 dark:text-white focus:outline-none focus-visible:ring-violet-400">
              Can a participant join multiple events?
            </summary>
            <p className="px-4 py-6 pt-0 ml-4 dark:text-white -mt-4">
              No, A participant can only join 1 individual event.
            </p>
          </details>
          <details className="mx-auto rounded-2xl dark:text-white border p-5 relative md:rounded-2xl border border-gray-700 border-opacity-70 bg-gray-900 bg-opacity-40 backdrop-blur-xl shadow-2xl ">
            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">
              What time does the event begin?
            </summary>
            <p className="px-4 py-6 pt-0 ml-4 dark:text-white -mt-4 ">
              The participants have to assemble before 9 A.M.
            </p>
          </details>
          <details className="mx-auto rounded-2xl border p-2 dark:text-white relative md:rounded-2xl border border-gray-700 border-opacity-70 bg-gray-900 bg-opacity-40 backdrop-blur-xl shadow-2xl ">
            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">
              Do the participants get their own equipment?
            </summary>
            <p className="px-4 py-6 pt-0 ml-4 -mt-4 marker:dark:text-white  ">
              It depends on the event, check event rules or contact the event
              coordinator.
            </p>
          </details>{' '}
          <details className="mx-auto rounded-2xl dark:text-white border p-5 relative md:rounded-2xl border border-gray-700 border-opacity-70 bg-gray-900 bg-opacity-40 backdrop-blur-xl shadow-2xl ">
            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">
              Who can participate in this event?
            </summary>
            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-white ">
              Only BCA and BSc computer science students.
            </p>
          </details>
        </div>
      </div>
    </section>
  );
};
