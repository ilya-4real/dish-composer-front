import RecipeCard from "./recipecard";
import Searchbar from "./searchbar";
import { useEffect, useState } from "react";
import Api from "../api/api";
import Loader from "./loader";

const Popular = () => {
    const [recipes, setRecipes] = useState([])
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        const FetchData = () => {
            try {
                Api.get('recipies/popular?limit=10&offset=0').then((resp) => {
                    setRecipes(resp.data.recipes)
                    setTimeout(() => {
                        setLoading(false)
                    }, 200)

                })
            } catch (err) {
                console.log(err)
            }
        }
        FetchData()
    }, [])

    return (
        <>
            <Searchbar />
            <div className="content">
                {loading ? <Loader /> :
                    recipes.map((recipe, index) => (
                        <RecipeCard key={index} recipe={recipe} />
                    ))
                }
            </div>
        </>
    );
}

export default Popular;