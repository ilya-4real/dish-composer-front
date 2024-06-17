import { useParams, useLocation, Link } from "react-router-dom";


const CompoundsNavigator = () => {
    const { type } = useParams()
    return ( 
        <>
        <div className="favorite-header">
            <Link to="/compounds/meat" className={type === "meat"? "favorite-header-item main-color": "favorite-header-item inactive-main-color"}>Meat</Link>
            <Link to="/compounds/garnish" className={type === "garnish"? "favorite-header-item main-color": "favorite-header-item inactive-main-color"}>Garnish</Link>
            <Link to="/compounds/sauce" className={type === "sauce"? "favorite-header-item main-color": "favorite-header-item inactive-main-color"}>Sauce</Link>
        </div>
        </>
     );
}
 
export default CompoundsNavigator;