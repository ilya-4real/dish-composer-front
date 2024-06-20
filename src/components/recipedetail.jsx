import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import Api from "../api/api";
import Loader from "./loader";
import { useTelegram } from "../hooks/telegram";

const RecipeDetail = () => {
    const { id } = useParams()
    const [liked, setLiked] = useState(false);
    const [recipe, setRecipe] = useState({});
    const [loading, setLoading] = useState(true)
    const { username } = useTelegram()

    const config = {
        headers: {
            Authorization: username
        }
    }

    useEffect(() => {

        const fetchData = () => {
            Api.get(`/recipies/${id}`, config).then((resp) => {
                setRecipe(resp.data)
                setLiked(resp.data.is_liked)
                setLoading(false)
            })
        }
        fetchData()
    }, [])
    const changeLike = () => {
        try {
            Api.post(`/recipies/${id}/like`, null, config)
        } catch (err) {
            console.log(err)
        }
    }

    const onLike = () => {
        if (liked === true) {
            setLiked(false)
            changeLike()
        } else {
            setLiked(true)
            changeLike()
        }
    }

    return (
        <>
            {
                loading ? <Loader /> :
                    <div className="recipe-detail">
                        <div>
                            <div className="recipe-header">
                                <div className="empty"></div>
                                <div className="recipe-btn">
                                    <button className="like-btn" onClick={onLike}>
                                        {liked ?
                                            <img src="/dark-heart.png" alt="ddd" /> :
                                            <img src="/empty-heart.png" alt="ddd" />
                                        }
                                    </button>
                                </div>
                            </div>
                            <center><h4>{recipe.title}</h4></center>
                        </div>
                        <p>{recipe.description}</p>
                        {recipe.components.map((component, index) => (
                            <div key={index} className="compound">
                                <center><h5>{component.title}</h5></center>
                                {component.ingredients.map((ingredient, index) => (
                                    <div key={index} className="ingredient">
                                        <div className="ingredient-title">{ingredient.title}</div>
                                        <div className="ingredient-weight">{ingredient.amount}g</div>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
            }
        </>
    );
}

export default RecipeDetail;