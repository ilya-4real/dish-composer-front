import RecipeCard from "./recipecard";
import { useState, useEffect } from "react";
import Loader from "./loader";
import Api from "../api/api";
import EmptyContent from "./empty-content";
import { useTelegram } from "../hooks/telegram";

const OwnLiked = () => {
    const [loading, setLoading] = useState(true)
    const [recipes, setRecipes] = useState([])
    const {username} = useTelegram()

    const fetchData = () => {
        const config = {
            headers:
                { Authorization: username}
        }
        Api.get('users/liked', config).then((resp) => {
            console.log(resp)
            setRecipes(resp.data.recipes)
            setLoading(false)
        })
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <>
            {loading ? <Loader /> :
                <div>
                    {recipes.length <= 0 ? 
                        <EmptyContent message="You haven't liked any recipes yet..."/> :
                    
                    recipes.map((recipe, index) => (
                        <RecipeCard key={index} recipe={recipe} />
                    ))}
                </div>
            }
        </>
    );
}

export default OwnLiked;