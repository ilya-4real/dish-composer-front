import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const Navigator = () => {
    const location = useLocation();
    return (
        <>
            <footer className="bottom-nav">
                <Link to='/' className={location.pathname === '/' ? 'active': ''}>Popular</Link>
                <Link to='/favorite' className={location.pathname === '/favorite' ? 'active': ''}>Favorite</Link>
                <Link to='/compounds' className={location.pathname === '/compounds' ? 'active': ''}>Compounds</Link>
                <Link to='/random' className={location.pathname === '/random' ? 'active': ''}>Random</Link>
            </footer>
        </>
    );
}

export default Navigator;
