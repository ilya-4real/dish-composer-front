import RecipeCard from "./recipecard";
import { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import Api from "../api/api";
import Loader from "./loader";
import { useTelegram } from "../hooks/telegram";
import EmptyContent from "./empty-content";

const OwnRecipes = () => {
    const [loading, setLoading] = useState(true)
    const [recipes, setRecipes] = useState([])
    const { username } = useTelegram()

    const fetchData = () => {
        const config = {
            headers: {
                Authorization: username
            }
        }
        Api.get('users/recipes', config).then((resp) => {
            console.log(resp.data)
            setRecipes(resp.data.recipes)
            setLoading(false)
        })
    }


    useEffect(() => {
        fetchData()
    }, [])

    return (
        <>
            <Link to="/recipe/new/" className="flex">
                <button className="active-btn">New recipe</button>
            </Link>
            {
                loading ? <Loader /> :
                    <div>
                        {recipes.length <= 0 ?
                            <EmptyContent message="You haven't created any recipes yet. Press button above to create one" /> :
                            recipes.map((recipe, index) => (
                                <RecipeCard key={index} recipe={recipe} />
                            ))}
                    </div>
            }
        </>
    );
}

export default OwnRecipes;