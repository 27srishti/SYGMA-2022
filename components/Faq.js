import React from "react";

export const Faq = () => {
  return (
    <section
      className="w-full h-full bg-no-repeat bg-cover bg-center bg-fixed"
      style={{
        backgroundImage:
          'url("https://img.freepik.com/free-vector/dark-hexagonal-background-with-gradient-color_79603-1410.jpg")',
      }}
    >
      <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
        <h2 className="text-2xl font-semibold sm:text-4xl">
          Frequently Asked Questions
        </h2>
        <p className="mt-4 mb-8 dark:text-gray-400 invisible">
          Sagittis tempor donec id vestibulum viverra. Neque condimentum primis
          orci at lacus amet bibendum.
        </p>
        <div className="space-y-4">
          <details className=" mx-auto  p-2 relative md:rounded-2xl border border-gray-700 border-opacity-70 bg-gray-900 bg-opacity-20 backdrop-blur-xl shadow-2xl ">
            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">
            When to pay the registration fee?
            </summary>
            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
            At the registration desk on the day of the event.
            </p>
          </details>
          <details className="mx-auto  p-2 relative md:rounded-2xl border border-gray-700 border-opacity-70 bg-gray-900 bg-opacity-20 backdrop-blur-xl shadow-2xl ">
            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">
            What is the contention regulation for overall champions?
            </summary>
            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
            A team has to participate in all of the events to be in contention for overall championship.
            </p>
          </details>
          <details className="mx-auto  p-2 relative md:rounded-2xl border border-gray-700 border-opacity-70 bg-gray-900 bg-opacity-20 backdrop-blur-xl shadow-2xl ">
            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">
            Can a participant join multiple events?
            </summary>
            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
            No a participant only only join 1 individual event.
            </p>
          </details>
          <details className="mx-auto  p-2 relative md:rounded-2xl border border-gray-700 border-opacity-70 bg-gray-900 bg-opacity-20 backdrop-blur-xl shadow-2xl ">
            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">
            What time does the event begin?
            </summary>
            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
            The participants have to assemble before 9 A.M.
            </p>
          </details>
          <details className="mx-auto  p-2 relative md:rounded-2xl border border-gray-700 border-opacity-70 bg-gray-900 bg-opacity-20 backdrop-blur-xl shadow-2xl ">
            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">
            Do the participants get their own equipment?
            </summary>
            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
            It depends on the event, check event rules or contact the event coordinator.
            </p>
          </details>  <details className="mx-auto  p-2 relative md:rounded-2xl border border-gray-700 border-opacity-70 bg-gray-900 bg-opacity-20 backdrop-blur-xl shadow-2xl ">
            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">
            Who can participate in this event?
            </summary>
            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
            Only BCA and BSc computer science students.
            </p>
          </details>
        </div>
      </div>
    </section>
  );
};
