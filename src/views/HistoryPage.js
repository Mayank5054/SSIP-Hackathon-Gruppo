import React from "react";

import Heading from "../components/Heading.js";
import Nav from "../components/Nav";
import Accordion from "../components/Accordion.js";

const HistoryPage = (props) => {
    return (
        <>
            <Nav showBg={true} isLoggedIn={true} />
            <section className='w-9/10 mx-auto relative mt-40 mb-10'>
                <Heading text={"History"} />
                <Accordion />
            </section>

            {/* <div className="flex items-start justify-center h-screen">
        <div className="bg-blue-500 bg-opacity-0">
          <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
            <div className="space-y-4">
              <details className="w-full rounded-lg ring-1 ring-black-600">
                <summary className="px-4 py-6">
                  <div className="grid grid-cols-5 gap-5">
                    <div className="col-span-2 text-teal-50">
                      About Annual Fucntion
                    </div>
                    <div className="col-span-1 text-teal-50">18-09-2022</div>
                    <div className="col-span-1 text-teal-50">10:00 Am</div>
                    <div className="text-green-600">ATTENDED</div>
                    <div className="text-teal-50">Discussion</div>
                  </div>
                </summary>
                <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">
                  React is a front-end JavaScript library developed by Facebook
                  in 2011.
                </p>
              </details>
              <details className="w-full rounded-lg ring-1 ring-purple-600">
                <summary className="px-4 py-6">
                  What is Props and how to use it give some example?
                </summary>
                <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">
                  Props is the shorthand for Properties in React.
                </p>
              </details>
              <details className="w-full rounded-lg ring-1 ring-purple-600">
                <summary className="px-4 py-6">
                  How to install tailwind css in react js ?
                </summary>
                <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">
                  What are synthetic events in React?
                </p>
              </details>
            </div>
          </div>
        </div>
  </div>*/}
        </>
    );
};
export default HistoryPage;
