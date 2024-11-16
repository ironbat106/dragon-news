import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { SlCalender } from "react-icons/sl";

const LeftNavbar = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch("https://openapi.programming-hero.com/api/news/categories")
            .then((res) => res.json())
            .then((data) => setCategories(data.data.news_category));
    }, []);

    return (
        <div className="space-y-6">
            <h2 className="font-semibold mb-3">All Category ({categories.length})</h2>
            <div className="flex flex-col gap-2">
                {
                    categories.map((category) => (
                        <NavLink
                            to={`/category/${category.category_id}`}
                            className="btn bg-base-100"
                            key={category.category_id}>
                            {category.category_name}
                        </NavLink>
                    ))}
            </div>
            <div className="card bg-base-100 shadow-xl">
                <figure>
                    <img
                        src="https://media.newyorker.com/photos/63a0b8e018f0244bba9fd613/master/pass/Mochkofsky-Messi.jpg"
                        alt="World Cup 2022" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        THE GREATEST FINAL EVER?!
                    </h2>
                    <p>Argentina v France! FIFA World Cup Qatar 2022.</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">Football</div>
                        <div className="badge badge-outline gap-2"><SlCalender />18th December, 2022</div>
                    </div>
                </div>
            </div>

            <div className="card bg-base-100 shadow-xl">
                <figure>
                    <img
                        src="https://www.aljazeera.com/wp-content/uploads/2024/08/AFP__20240805__36AR2PB__v3__Preview__BangladeshUnrestStudents-1722865448.jpg?resize=1200%2C630"
                        alt="Bangladesh" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Bangladesh protests updates: Sheikh Hasina quits, interim gov’t taking over</h2>
                    <p>Prime Minister Sheikh Hasina resigns and flees Bangladesh after weeks of deadly unrest.</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">Drama</div>
                        <div className="badge badge-outline gap-2"><SlCalender />5th August, 2024
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="card bg-base-100 shadow-xl">
                <figure>
                    <img
                        src="https://media.formula1.com/image/upload/f_auto,c_limit,w_960,q_auto/t_16by9Centre/f_auto/q_auto/trackside-images/2024/F1_Grand_Prix_of_Brazil_and_Qualifying/2182693605"
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Verstappen wins chaotic Sao Paulo Grand Prix</h2>
                    <p>Max Verstappen has stormed to a remarkable victory in a frenetic Sao Paulo Grand Prix, the Dutchman climbing through the field from an original starting position of P17</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">F1</div>
                        <div className="badge badge-outline"><SlCalender />3rd November 2024</div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default LeftNavbar;