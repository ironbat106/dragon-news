import { Link } from "react-router-dom";
import Header from "../Header";
import LatestNews from "../LatestNews";


const Career = () => {
    return (
        <div>
            <Header></Header>
            <div className="w-11/12 mx-auto font-poppins">
                <LatestNews></LatestNews>
            </div>
            <div className="nav space-x-5 mx-auto text-center font-poppins py-5">
                <Link to="/">Home</Link>
                <Link to="/career">Career</Link>
                <Link to="/about">About</Link>
                <Link to="/dev">Dev Information</Link>
            </div>
            <div className="space-y-2 border-2 w-11/12 mx-auto rounded-lg">

                <h1 className="text-6xl text-extrabold text-center text-gray-700">
                    Aryan Ahad Ateeq
                </h1>

                <h1 className="text-3xl text-bold text-center text-gray-600">
                    aka IronBat
                </h1>

                <h1 className="text-xl text-bold text-center text-gray-600">
                    Aspiring Software Engineer | Experienced in C++,C#, Java, and HTML/CSS/JavaScript for Web and System Solutions | Video Editor (Da Vinci Resolve)
                </h1>

                <div className="space-y-4 mb-4">
                    <div className="youtube-video-container mx-auto flex justify-center items-center py-2">
                        <iframe className="rounded-lg" width="560" height="315" src="https://www.youtube.com/embed/f1VT2Q6yCO0?si=wU8y7YEp1F0ltdM6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>

                    <div className="mx-auto flex justify-center items-center py-2">
                        <div className="stats shadow">
                            <div className="stat">
                                <div className="stat-figure text-primary">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        className="inline-block h-8 w-8 stroke-current">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                                    </svg>
                                </div>
                                <div className="stat-title">Impressions</div>
                                <div className="stat-value text-primary">98,942</div>
                                <div className="stat-desc">16.6% more than last month</div>
                            </div>

                            <div className="stat">
                                <div className="stat-figure text-secondary">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        className="inline-block h-8 w-8 stroke-current">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                                    </svg>
                                </div>
                                <div className="stat-title">Channel Views</div>
                                <div className="stat-value text-secondary">30,181</div>
                                <div className="stat-desc">21% more than last month</div>
                            </div>

                            <div className="stat">
                                <div className="stat-figure text-secondary">
                                    <div className="avatar online">
                                        <div className="w-16 rounded-full">
                                            <img src="https://yt3.ggpht.com/k9GPo5Ov90P-9towPtu43Q39VyQoEfav6Ner3ASt9WzXm94gxFcr-jgzx-6rsh_bTLbmyFdR6g=s600-c-k-c0x00ffffff-no-rj-rp-mo" />
                                        </div>
                                    </div>
                                </div>
                                <div className="stat-value">227.5</div>
                                <div className="stat-title">Watch time</div>
                                <div className="stat-desc text-secondary">(hours)</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Career;