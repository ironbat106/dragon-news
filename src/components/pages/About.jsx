import { Link } from "react-router-dom";
import Header from "../Header";
import LatestNews from "../LatestNews";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import Footer from "./Footer";


const About = () => {
    return (
        <div className="bg-gradient-to-b from-gray-100 to-gray-300 min-h-screen font-poppins">
            <Header></Header>
            <div className="w-11/12 mx-auto">
                <LatestNews></LatestNews>
            </div>

            {/* Navigation */}
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

                <div className="flex justify-center mt-6 space-x-5">
                    <a
                        href="https://www.linkedin.com/in/aryan-ahad-ateeq/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-blue-600 text-white px-6 py-3 rounded-none font-semibold flex items-center space-x-3 hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-110 shadow-lg"
                    >
                        <FaLinkedin className="text-xl" />
                        <span>LinkedIn Profile</span>
                    </a>
                    <a
                        href="https://github.com/ironbat106"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gray-800 text-white px-6 py-3 rounded-none font-semibold flex items-center space-x-3 hover:bg-gray-900 transition duration-300 ease-in-out transform hover:scale-110 shadow-lg"
                    >
                        <FaGithub className="text-xl" />
                        <span>GitHub Profile</span>
                    </a>
                </div>


                <div className="w-11/12 md:w-9/12 lg:w-8/12 mx-auto space-y-6 p-6 bg-white rounded-lg shadow-xl mt-6">
                    <h2 className="text-2xl font-bold text-gray-700 mb-4">About Me</h2>

                    <div className="chat chat-start">
                        <div className="chat-bubble bg-gray-100 text-gray-800">
                            What are you studying right now?
                        </div>
                    </div>
                    <div className="chat chat-end">
                        <div className="chat-bubble bg-blue-500 text-white">
                            I'm pursuing a Computer Science degree and aiming for a CGPA of 3.50+. Gotta aim high, right? 🚀
                        </div>
                    </div>

                    <div className="chat chat-start">
                        <div className="chat-bubble bg-gray-100 text-gray-800">
                            Do you have experience with coding projects?
                        </div>
                    </div>
                    <div className="chat chat-end">
                        <div className="chat-bubble bg-blue-500 text-white">
                            Absolutely! I've built a car management system in Java, a hotel management system using SQL, and more. Each one taught me something new (and how to debug faster). 😉
                        </div>
                    </div>

                    <div className="chat chat-start">
                        <div className="chat-bubble bg-gray-100 text-gray-800">
                            What about web development? Any experience there?
                        </div>
                    </div>
                    <div className="chat chat-end">
                        <div className="chat-bubble bg-blue-500 text-white">
                            Yep, I've created around 8 websites using HTML, CSS, and JavaScript. Coding + creativity = fun!
                        </div>
                    </div>

                    <div className="chat chat-start">
                        <div className="chat-bubble bg-gray-100 text-gray-800">
                            Interesting! Do you have any creative hobbies outside coding?
                        </div>
                    </div>
                    <div className="chat chat-end">
                        <div className="chat-bubble bg-blue-500 text-white">
                            I'm into video editing on Da Vinci Resolve—think YouTube montages and cool transitions. 🎥
                        </div>
                    </div>

                    <div className="chat chat-start">
                        <div className="chat-bubble bg-gray-100 text-gray-800">
                            So, what's next for you?
                        </div>
                    </div>
                    <div className="chat chat-end">
                        <div className="chat-bubble bg-blue-500 text-white">
                            Connecting with like-minded tech enthusiasts and professionals. Collaboration is the best way to grow!
                        </div>
                    </div>
                </div>


                <div className="flex flex-col items-center mt-10">
                    <h2 className="text-2xl font-bold text-gray-700 mb-4">My CV</h2>
                    <img
                        src="/src/assets/resume.jpg"
                        alt="CV"
                        className="w-11/12 md:w-8/12 lg:w-6/12 rounded-lg shadow-lg mb-12"
                    />
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default About;
