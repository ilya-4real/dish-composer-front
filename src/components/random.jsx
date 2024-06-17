import Api from "../api/api";
import Loader from "./loader";
import GeneratedRecipe from "./generated-recipe";
import { useState } from "react";

const Random = () => {
    const [recipe, setRecipe] = useState(null)
    const [loading, setLoading] = useState(false)

    const fetchData = () => {
        setLoading(true)
        Api.get("recipies/random").then((resp) => {
            console.log(recipe)
            setRecipe(resp.data)
            setLoading(false)
        })
    }


    const onRandom = () => {
        console.log('random')
        fetchData()
    }

    const onSave = () => {
        console.log('save')
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
                        {recipe ? <button onClick={onSave} className="active-btn">save</button>: <></>
                        }
                        <button onClick={onRandom} className="active-btn">ganerate</button>
                    </div>
                    </>
            }
        </>
    );
}

export default Random;