import Api from "../api/api";
import Loader from "./loader";
import GeneratedRecipe from "./generated-recipe";
import { useState } from "react";
import { useTelegram } from "../hooks/telegram";
import { useNavigate } from "react-router-dom";

const Random = () => {
    const [recipe, setRecipe] = useState(null)
    const [loading, setLoading] = useState(false)
    const { username } = useTelegram()
    const navigate = useNavigate()

    const fetchData = () => {
        setLoading(true)
        Api.get("recipies/random").then((resp) => {
            console.log(recipe)
            setRecipe(resp.data)
            setLoading(false)
        })
    }

    const sendData = (recipe) => {
        Api.post('recipies/', recipe).then((resp) => {
            console.log(resp)
        })
    }

    const onRandom = () => {
        console.log('random')
        fetchData()
    }

    const onSave = () => {
        console.log('save')
        let saving_recipe = recipe
        saving_recipe.author = username
        saving_recipe.description = recipe.title
        console.log(saving_recipe)
        sendData(saving_recipe)
        navigate("/my/own")
    }

    return (
        <>
            {
                loading ? <Loader /> :
                    <>
                        {recipe ? <GeneratedRecipe recipe={recipe} /> :
                            <div className="random-card">
                                <img src="/surprise-box.png" alt="" width='300' />
                            </div>
                        }
                        <div className="flex w-95">
                            {recipe ? <button onClick={onSave} className="active-btn mr5">save</button> : <></>
                            }
                            <button onClick={onRandom} className="active-btn">ganerate</button>
                        </div>
                    </>
            }
        </>
    );
}

export default Random;