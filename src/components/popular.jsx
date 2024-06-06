import RecipeCard from "./recipecard";
import { Link } from "react-router-dom";
import Searchbar from "./searchbar";

const Popular = () => {
    return (
        <div className="content">
            <Searchbar />
            <Link to='/recipe/1'>
                <RecipeCard />
            </Link>
            <RecipeCard />
            <RecipeCard />
            <RecipeCard />
            <RecipeCard />
            <RecipeCard />
            <RecipeCard />
            <RecipeCard />
            <RecipeCard />
        </div>
    );
}

export default Popular;