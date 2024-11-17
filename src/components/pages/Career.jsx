import { Link } from "react-router-dom";
import Header from "../Header";
import LatestNews from "../LatestNews";
import { FaYoutube } from "react-icons/fa";
import Footer from "./Footer";

const Career = () => {
    return (
        <div className="bg-gradient-to-b from-gray-100 to-gray-300 min-h-screen font-poppins">
            <Header></Header>
            <div className="w-11/12 mx-auto">
                <LatestNews></LatestNews>
            </div>


            <div className="nav flex justify-center space-x-10 py-5 text-lg font-medium">
                <Link
                    to="/"
                    className="hover:text-blue-600 transition duration-300 ease-in-out"
                >
                    Home
                </Link>
                <Link
                    to="/career"
                    className="hover:text-blue-600 transition duration-300 ease-in-out"
                >
                    Career
                </Link>
                <Link
                    to="/about"
                    className="hover:text-blue-600 transition duration-300 ease-in-out"
                >
                    About
                </Link>
                <Link
                    to="/dev"
                    className="hover:text-blue-600 transition duration-300 ease-in-out"
                >
                    Dev Information
                </Link>
            </div>

            <div className="space-y-5 border-4 border-gray-300 bg-white p-10 rounded-xl shadow-xl w-11/12 mx-auto mb-12">
                <h1 className="text-6xl font-extrabold text-center text-gray-800 tracking-wide drop-shadow-md">
                    Aryan Ahad Ateeq
                </h1>
                <h2 className="text-3xl font-semibold text-center text-gray-700 tracking-tight">
                    aka IronBat
                </h2>
                <p className="text-xl text-center text-gray-600 leading-relaxed">
                    Aspiring Software Engineer | Experienced in C++, C#, Java, and
                    HTML/CSS/JavaScript for Web and System Solutions | Video Editor (Da
                    Vinci Resolve)
                </p>

                <div className="flex justify-center">
                    <iframe
                        className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/f1VT2Q6yCO0?si=wU8y7YEp1F0ltdM6"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    ></iframe>
                </div>

                <div className="flex justify-center mt-6">
                    <a
                        href="https://www.youtube.com/@ironbat106"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-red-600 text-white font-bold py-3 px-6 rounded-none shadow-lg hover:bg-red-700 transition duration-300 ease-in-out transform hover:scale-110 flex items-center space-x-3"
                    >
                        <FaYoutube className="text-2xl" />
                        <span>Visit My YouTube Channel</span>
                    </a>
                </div>


                <div className="flex flex-wrap justify-around items-center gap-6 mt-6">
                    <div className="stat bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6 rounded-none shadow-lg hover:scale-105 transition-transform duration-300">
                        <div className="stat-figure">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                className="inline-block h-12 w-12"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                    stroke="currentColor"
                                ></path>
                            </svg>
                        </div>
                        <div className="stat-title">Impressions</div>
                        <div className="stat-value">98,942</div>
                        <div className="stat-desc">16.6% more than last month</div>
                    </div>

                    <div className="stat bg-gradient-to-r from-green-500 to-teal-600 text-white p-6 rounded-none shadow-lg hover:scale-105 transition-transform duration-300">
                        <div className="stat-figure">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                className="inline-block h-12 w-12"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M13 10V3L4 14h7v7l9-11h-7z"
                                    stroke="currentColor"
                                ></path>
                            </svg>
                        </div>
                        <div className="stat-title">Channel Views</div>
                        <div className="stat-value">30,181</div>
                        <div className="stat-desc">21% more than last month</div>
                    </div>

                    <div className="stat bg-gradient-to-r from-red-500 to-pink-600 text-white p-6 rounded-none shadow-lg hover:scale-105 transition-transform duration-300">
                        <div className="stat-figure">
                            <div className="avatar online">
                                <div className="w-16 rounded-full">
                                    <img
                                        src="https://yt3.ggpht.com/k9GPo5Ov90P-9towPtu43Q39VyQoEfav6Ner3ASt9WzXm94gxFcr-jgzx-6rsh_bTLbmyFdR6g=s600-c-k-c0x00ffffff-no-rj-rp-mo"
                                        alt="Profile"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="stat-title">Watch Time</div>
                        <div className="stat-value">227.5</div>
                        <div className="stat-desc">(hours)</div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Career;
