import { useLoaderData } from "react-router-dom";
import NewsCard from "../NewsCard";

const CategoryNews = () => {

    const { data: news } = useLoaderData();

    return (
        <div>
            <h2
                className="font-semibold text-xl mb-3">
                Dragon News Home
            </h2>

            <p
                className="text-gray-400 text-l text-sm">
                {news.length}
                News Found On This Category
            </p>

            <div>
                {news.map((singleNews) => (
                    <NewsCard key={singleNews._id} news={singleNews} ></NewsCard>
                ))}
            </div>
        </div>
    );
};

export default CategoryNews;