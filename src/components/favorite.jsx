import OwnComponentsNavigator from "./own-recipes-navigator";
import OwnRecipes from "./own-recipes";
import OwnLiked from "./own-liked";
import { useLocation } from "react-router-dom";

const Favorite = () => {
    const location = useLocation();

    const is_my_own = () => {
        if (location.pathname === '/my/own') {
            return true
        } else {
            return false
        }
    }

    return (
        <>
                <OwnComponentsNavigator />
                {
                    is_my_own() ? <OwnRecipes /> : <OwnLiked />
                }
        </>
    );
}

export default Favorite;