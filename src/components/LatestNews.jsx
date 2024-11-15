import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const LatestNews = () => {
    return (
        <div className="flex gap-2 items-center bg-base-200 p-2">
            <p className="text-xl bg-[#D72050] text-base-100 px-3 py-1">Latest</p>

            <Marquee pauseOnHover={true} speed={100} className="space-x-10">
                <Link to="/news">
                    Presidential Election 2024 Live Results: Donald Trump wins. 
                </Link>
                <Link to="/news">
                    Saudi Crown Prince criticizes Israel, accusing it of committing genocide in Gaza. 
                </Link>
                <Link to="/news">
                    Bangladesh receives $655 million in remittances within the first nine days of November, showing continued financial support from expatriates and steady inflow despite recent fluctuations.
                </Link>
            </Marquee>
        </div>
    );
};

export default LatestNews;