import { Link, useLoaderData } from "react-router-dom";
import Header from "../Header";
import RightNavbar from './../layout-component/RightNavbar';
import { FaArrowLeft } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";

const NewsDetails = () => {

    const data = useLoaderData();
    const news = data.data[0];
    console.log(news);

    return (
        <div>

            <header>
                <Header></Header>
            </header>

            <main className="w-11/12 mx-auto grid grid-cols-12 gap-5 ">
                <section className="col-span-9 space-y-12">

                    <div className="flex align-items gap-4">

                        <Link
                            to={`/category/${news?.category_id}`}
                            className="btn btn-neutral text-white rounded-full">
                            <FaArrowLeft />
                            
                        </Link>
                        
                        <h2 className="font-semibold mb-3 text-3xl">Dragon News</h2>

                    </div>

                    <div className="border-2 rounded-lg">
                        <div className="card bg-base-100">
                            <figure className="px-10 pt-10">
                                <img
                                    src={news?.image_url}
                                    alt="Shoes"
                                    className="rounded-xl" />
                            </figure>

                            <div className="card-body">
                                <h2 className="card-title font-semibold text-3xl">{news?.title}</h2>
                                <p className="text-xl">{news?.details}</p>
                                <div className="card-actions">
                                    <Link
                                        to={`/category/${news?.category_id}`}
                                        className="btn btn-error text-white rounded-none">
                                        <FaArrowLeft />
                                        All news in this category
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-4 justify-around">
                        <div className="card bg-base-100 shadow-xl max-w-xs">
                            <figure>
                                <img
                                    src="https://media.newyorker.com/photos/63a0b8e018f0244bba9fd613/master/pass/Mochkofsky-Messi.jpg"
                                    alt="World Cup 2022"
                                />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">THE GREATEST FINAL EVER?!</h2>
                                <p>Argentina v France! FIFA World Cup Qatar 2022.</p>
                                <div className="card-actions justify-between">
                                    <div className="badge badge-outline">Football</div>
                                    <div className="badge badge-outline gap-2">
                                        <SlCalender />18th December, 2022
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="card bg-base-100 shadow-xl max-w-xs">
                            <figure>
                                <img
                                    src="https://www.aljazeera.com/wp-content/uploads/2024/08/AFP__20240805__36AR2PB__v3__Preview__BangladeshUnrestStudents-1722865448.jpg?resize=1200%2C630"
                                    alt="Bangladesh"
                                />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">
                                    Bangladesh protests updates: Sheikh Hasina quits, interim gov’t
                                    taking over
                                </h2>
                                <p>
                                    Prime Minister Sheikh Hasina resigns and flees Bangladesh after
                                    weeks of deadly unrest.
                                </p>
                                <div className="card-actions justify-between">
                                    <div className="badge badge-outline">Drama</div>
                                    <div className="badge badge-outline gap-2">
                                        <SlCalender />5th August, 2024
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="card bg-base-100 shadow-xl max-w-xs">
                            <figure>
                                <img
                                    src="https://media.formula1.com/image/upload/f_auto,c_limit,w_960,q_auto/t_16by9Centre/f_auto/q_auto/trackside-images/2024/F1_Grand_Prix_of_Brazil_and_Qualifying/2182693605"
                                    alt="Sao Paulo GP"
                                />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">
                                    Verstappen wins chaotic Sao Paulo Grand Prix
                                </h2>
                                <p>
                                    Max Verstappen has stormed to a remarkable victory in a frenetic
                                    Sao Paulo Grand Prix, the Dutchman climbing through the field
                                    from an original starting position of P17.
                                </p>
                                <div className="card-actions justify-between">
                                    <div className="badge badge-outline">F1</div>
                                    <div className="badge badge-outline gap-2">
                                        <SlCalender />3rd November, 2024
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>

                <aside className="col-span-3">
                    <RightNavbar></RightNavbar>
                </aside>

            </main>
        </div>
    );
};

export default NewsDetails;