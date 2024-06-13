import { Link } from "react-router-dom";

const OwnRecipes = () => {
    return ( 
        <>
            <Link to="/recipe/new/" className="flex">
                <button className="active-btn">New recipe</button>
            </Link>
            </>
     );
}
 
export default OwnRecipes;