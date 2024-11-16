import FindUs from "../FindUs";
import Advertisement from "../pages/Advertisement";
import QZone from "../pages/QZone";
import SocialLogin from "../SocialLogin";


const RightNavbar = () => {
    return (
        <div className="space-y-6">
            <SocialLogin></SocialLogin>
            <FindUs></FindUs>
            <QZone></QZone>
            <Advertisement></Advertisement>
        </div>
    );
};

export default RightNavbar;