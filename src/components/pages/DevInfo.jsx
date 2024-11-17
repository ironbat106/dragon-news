import { Link } from "react-router-dom";
import Header from "../Header";
import LatestNews from "../LatestNews";
import Footer from "./Footer";


const DevInfo = () => {
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

            <div className="bg-gradient-to-b from-gray-100 to-gray-300 min-h-screen font-poppins text-gray-800">

                <div className="text-center py-6">
                    <h1 className="text-6xl font-extrabold text-gray-800 drop-shadow-md">
                        Aryan Ahad Ateeq
                    </h1>
                </div>

                <div className="w-11/12 md:w-9/12 lg:w-8/12 mx-auto mt-6 space-y-6 font-poppins">

                    <header className="text-center space-y-4">
                        <h1 className="text-4xl font-extrabold text-gray-800">Dragon News Dev Info</h1>
                        <p className="text-lg text-gray-600">
                            Insights into the development process and tech stack behind Dragon News Outlet.
                        </p>
                    </header>

                    <section className="bg-gray-100 p-6 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-bold text-gray-700 mb-4">Tech Stack</h2>
                        <ul className="list-disc ml-6 space-y-2 text-gray-700">
                            <li>
                                <span className="font-semibold">Frontend:</span> React, Tailwind CSS
                            </li>
                            <li>
                                <span className="font-semibold">Routing:</span> React Router
                            </li>
                            <li>
                                <span className="font-semibold">State Management:</span> Props and Component State
                            </li>
                            <li>
                                <span className="font-semibold">Backend:</span> Firebase for Authentication and Hosting
                            </li>
                        </ul>
                    </section>

                    <section className="bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-bold text-gray-700 mb-4">Developer Insights</h2>
                        <p className="text-lg leading-relaxed text-gray-600">
                            Building Dragon News has been an exciting journey, leveraging modern technologies
                            to create a seamless user experience. From crafting dynamic routing to ensuring
                            responsive designs, every element was designed with the user in mind. 🚀
                        </p>
                        <p className="text-lg leading-relaxed text-gray-600">
                            Staying true to the principles of simplicity and performance, the project exemplifies
                            how a small but well-structured stack can achieve big goals.
                        </p>
                    </section>

                    <div className="flex justify-center mt-6 space-x-5">
                        <Link
                            to="/"
                            className="bg-gray-800 text-white px-6 py-3 rounded-none font-semibold hover:bg-gray-900 transition transform hover:scale-105 shadow-lg"
                        >
                            Back to Home
                        </Link>
                        <Link
                            to="/about"
                            className="bg-gray-800 text-white px-6 py-3 rounded-none font-semibold hover:bg-gray-900 transition transform hover:scale-105 shadow-lg"
                        >
                            About Aryan
                        </Link>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default DevInfo;
