import React from "react";

export const Footer = () => {
  return (
    <footer
      className="px-4 divide-y bg-[#020314] dark:text-gray-100
    "
      id="Footer"
      href="#Footer"
    >
      <div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
        <div className="lg:w-1/3">
          <a
            rel="noopener noreferrer"
            href="#"
            className="flex justify-center space-x-3 lg:justify-start"
          >
            <div className="flex items-center  mt-10 justify-center rounded-full">
              <img
                src="https://i.postimg.cc/rsnxLFHw/Slide-4-3-15-2.png"
                className=" -mt-10 h-28 w-28"
                alt="Hero Section"
              />
            </div>
            <span className="self-center text-2xl font-semibold">
              SYGMA2022 <p className="text-base font-sans mt-1"> sdmcbm@sdmcbm.ac.in</p>
            </span>
   
          </a>        
        </div>
        <div className="grid px-10 grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4">
          <div className="space-y-3">
            <h3 className="tracking-wide uppercase dark:text-gray-50">
              Navigation
            </h3>
            <ul className="space-y-1">
              <li>
                <a rel="noopener noreferrer" href="#Home">
                  Home
                </a>
              </li>
              <li>
                <a rel="noopener noreferrer" href="#">
                  About
                </a>
              </li>
              <li>
                <a rel="noopener noreferrer" href="#Events">
                  Events
                </a>
              </li>
              {/* <li>
              <a rel="noopener noreferrer" href="#">
                Gallery
              </a>
            </li> */}
              <li>
                <a rel="noopener noreferrer" href="#Faq">
                  FAQ`s
                </a>
              </li>
            </ul>
          </div>
          {/* <div className="space-y-3">
          <h3 className="tracking-wide uppercase dark:text-gray-50">
            Sponsors
          </h3>
          <ul className="space-y-1">
            <li>
              <a rel="noopener noreferrer" href="#">
                Mango
              </a>
            </li>
            <li>
              <a rel="noopener noreferrer" href="#">
                Poteto
              </a>
            </li>
          </ul>
        </div> */}
          {/* <div className="space-y-3">
          <h3 className="uppercase dark:text-gray-50">Developers</h3>
          <ul className="space-y-1">
            <li>
              <a rel="noopener noreferrer" href="#">
                Public API
              </a>
            </li>
            <li>
              <a rel="noopener noreferrer" href="#">
                Documentation
              </a>
            </li>
            <li>
              <a rel="noopener noreferrer" href="#">
                Guides
              </a>
            </li>
          </ul>
        </div> */}
          <div className="space-y-3">
            <div className="uppercase dark:text-gray-50">Social media</div>
            <div className="flex justify-start space-x-3">
              <a
                rel="noopener noreferrer"
                href="https://instagram.com/sygma_2022?igshid=YmMyMTA2M2Y="
                title="Instagram"
                className="flex items-center p-1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  fill="currentColor"
                  className="w-5 h-5 fill-current"
                >
                  <path d="M16 0c-4.349 0-4.891 0.021-6.593 0.093-1.709 0.084-2.865 0.349-3.885 0.745-1.052 0.412-1.948 0.959-2.833 1.849-0.891 0.885-1.443 1.781-1.849 2.833-0.396 1.020-0.661 2.176-0.745 3.885-0.077 1.703-0.093 2.244-0.093 6.593s0.021 4.891 0.093 6.593c0.084 1.704 0.349 2.865 0.745 3.885 0.412 1.052 0.959 1.948 1.849 2.833 0.885 0.891 1.781 1.443 2.833 1.849 1.020 0.391 2.181 0.661 3.885 0.745 1.703 0.077 2.244 0.093 6.593 0.093s4.891-0.021 6.593-0.093c1.704-0.084 2.865-0.355 3.885-0.745 1.052-0.412 1.948-0.959 2.833-1.849 0.891-0.885 1.443-1.776 1.849-2.833 0.391-1.020 0.661-2.181 0.745-3.885 0.077-1.703 0.093-2.244 0.093-6.593s-0.021-4.891-0.093-6.593c-0.084-1.704-0.355-2.871-0.745-3.885-0.412-1.052-0.959-1.948-1.849-2.833-0.885-0.891-1.776-1.443-2.833-1.849-1.020-0.396-2.181-0.661-3.885-0.745-1.703-0.077-2.244-0.093-6.593-0.093zM16 2.88c4.271 0 4.781 0.021 6.469 0.093 1.557 0.073 2.405 0.333 2.968 0.553 0.751 0.291 1.276 0.635 1.844 1.197 0.557 0.557 0.901 1.088 1.192 1.839 0.22 0.563 0.48 1.411 0.553 2.968 0.072 1.688 0.093 2.199 0.093 6.469s-0.021 4.781-0.099 6.469c-0.084 1.557-0.344 2.405-0.563 2.968-0.303 0.751-0.641 1.276-1.199 1.844-0.563 0.557-1.099 0.901-1.844 1.192-0.556 0.22-1.416 0.48-2.979 0.553-1.697 0.072-2.197 0.093-6.479 0.093s-4.781-0.021-6.48-0.099c-1.557-0.084-2.416-0.344-2.979-0.563-0.76-0.303-1.281-0.641-1.839-1.199-0.563-0.563-0.921-1.099-1.197-1.844-0.224-0.556-0.48-1.416-0.563-2.979-0.057-1.677-0.084-2.197-0.084-6.459 0-4.26 0.027-4.781 0.084-6.479 0.083-1.563 0.339-2.421 0.563-2.979 0.276-0.761 0.635-1.281 1.197-1.844 0.557-0.557 1.079-0.917 1.839-1.199 0.563-0.219 1.401-0.479 2.964-0.557 1.697-0.061 2.197-0.083 6.473-0.083zM16 7.787c-4.541 0-8.213 3.677-8.213 8.213 0 4.541 3.677 8.213 8.213 8.213 4.541 0 8.213-3.677 8.213-8.213 0-4.541-3.677-8.213-8.213-8.213zM16 21.333c-2.948 0-5.333-2.385-5.333-5.333s2.385-5.333 5.333-5.333c2.948 0 5.333 2.385 5.333 5.333s-2.385 5.333-5.333 5.333zM26.464 7.459c0 1.063-0.865 1.921-1.923 1.921-1.063 0-1.921-0.859-1.921-1.921 0-1.057 0.864-1.917 1.921-1.917s1.923 0.86 1.923 1.917z"></path>
                </svg>
              </a><a
              rel="noopener"
              href="https://youtube.com/channel/UCeNtI-GE2_zqmichdQegyyg"
              title="YouTube"
              target="_blank"
              className="flex -pt-10 w-12 h-12 rounded-full bg-gray-800 bg-opacity-0 hover:bg-opacity-60 focus:bg-opacity-40 active:bg-opacity-50 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="w-6"
                viewBox="0 0 16 16"
              >
                <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" />
              </svg>
            </a>
            </div>
            
          </div>
        </div>
      </div>
      <div className="py-6 text-sm text-center dark:text-gray-400">
        Shri Dharmasthala Manjunatheshwara College of Business Management - MG
        Rd, Kodailbail, Mangaluru, Karnataka 575003. - Phone: +91 824 249 4186
      </div>
    </footer>
  );
};
