import { useLocation, Link } from "react-router-dom";

const OwnComponentsNavigator = () => {
    const location = useLocation();
    return ( 
        <>
        <div className="favorite-header">
                <Link  to="/my/own" className={location.pathname === '/my/own'? "favorite-header-item main-color": "favorite-header-item inactive-main-color"}>
                    Own
                </Link>
                <Link to="/my/liked" className={location.pathname === '/my/liked'? "favorite-header-item main-color": "favorite-header-item inactive-main-color"}>
                    Liked
                </Link>
            </div>
        </>
     );
}
 
export default OwnComponentsNavigator;