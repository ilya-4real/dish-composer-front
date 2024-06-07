import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const Navigator = () => {
    const location = useLocation();
    const my_path = location.pathname.includes("/my")
    console.log(my_path)
    return (
        <>
            <footer className="bottom-nav">
                <Link to='/' className={location.pathname === '/' ? 'active': ''}>Popular</Link>
                <Link to='/my/own' className={my_path ? 'active': ''}>My</Link>
                <Link to='/compounds' className={location.pathname === '/compounds' ? 'active': ''}>Compounds</Link>
                <Link to='/random' className={location.pathname === '/random' ? 'active': ''}>Random</Link>
            </footer>
        </>
    );
}

export default Navigator;
