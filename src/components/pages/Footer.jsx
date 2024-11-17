import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      {/* Container */}
      <div className="w-11/12 md:w-9/12 lg:w-8/12 mx-auto space-y-8">
        {/* Top Section: Branding and Social Links */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Branding */}
          <div className="text-center md:text-left space-y-2">
            <h2 className="text-3xl font-bold">Dragon News</h2>
            <p className="text-gray-400 text-sm">
              Stay updated with the latest, curated news. Where stories meet perspective.
            </p>
          </div>

          {/* Social Media Links */}
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a
              href="https://www.linkedin.com/in/aryan-ahad-ateeq/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-500 transition transform hover:scale-110"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="h-6 w-6"
                viewBox="0 0 24 24"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 20h-3v-11h3v11zm-1.5-12.3c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.3h-3v-5.602c0-1.337-.024-3.065-1.868-3.065-1.869 0-2.156 1.46-2.156 2.967v5.7h-3v-11h2.881v1.507h.041c.401-.755 1.382-1.551 2.846-1.551 3.045 0 3.607 2.004 3.607 4.613v6.431z" />
              </svg>
            </a>
            <a
              href="https://github.com/ironbat106"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-300 transition transform hover:scale-110"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="h-6 w-6"
                viewBox="0 0 24 24"
              >
                <path d="M12 .5c-6.63 0-12 5.37-12 12 0 5.3 3.438 9.8 8.205 11.385.6.11.82-.26.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.612-4.042-1.612-.546-1.385-1.332-1.755-1.332-1.755-1.09-.744.083-.729.083-.729 1.205.085 1.84 1.238 1.84 1.238 1.07 1.835 2.807 1.305 3.492.998.11-.774.42-1.305.762-1.605-2.665-.305-5.467-1.334-5.467-5.932 0-1.31.47-2.38 1.236-3.22-.125-.305-.535-1.53.115-3.18 0 0 1.007-.322 3.3 1.23.96-.267 1.985-.4 3.005-.405 1.02.005 2.045.138 3.005.405 2.29-1.552 3.295-1.23 3.295-1.23.655 1.65.245 2.875.12 3.18.77.84 1.235 1.91 1.235 3.22 0 4.61-2.805 5.625-5.475 5.922.43.375.81 1.11.81 2.242 0 1.62-.015 2.925-.015 3.322 0 .32.215.695.825.577 4.765-1.585 8.2-6.085 8.2-11.385 0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
            <a
              href="https://www.youtube.com/@ironbat106"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-red-600 transition transform hover:scale-110"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="h-6 w-6"
                viewBox="0 0 24 24"
              >
                <path d="M19.615 6.103c-3.577-2.777-10.653-2.778-14.233-.002-2.364 1.825-2.364 4.775-2.364 5.899 0 1.125 0 4.076 2.364 5.899 3.579 2.775 10.656 2.774 14.233-.002 2.364-1.825 2.364-4.774 2.364-5.897 0-1.125-.001-4.075-2.364-5.899zm-9.598 8.583v-6.771l6.092 3.387-6.092 3.384z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Bottom Section: Links and Copyright */}
        <div className="text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} Dragon News. All rights reserved.</p>
          <p>Curated with passion by Aryan Ahad Ateeq.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
