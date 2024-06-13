import { useState } from "react";
import { useTelegram } from "../../hooks/telegram";
import Api from "../../api/api";
import { useNavigate } from "react-router-dom";


const RecipeForm = () => {
    const navigate = useNavigate()
    const [recipeTitle, setRecipeTitle] = useState('')
    const [recipeDescr, setRecipeDescr] = useState('')
    const [ingredients, setIngredients] = useState([{ title: '', amount: 0 }])
    const [error, setError] = useState('')
    const { username } = useTelegram()
    const empty_ingredient = {
        title: '',
        amount: 0,
    }

    const sendData = (data) => {
        try {
            Api.post("recipies/", data).then((resp) => {
                console.log(resp)
            })
        } catch (err) {
            console.log(err)
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        const recipe = {
            author: username,
            title: recipeTitle,
            description: recipeDescr,
            components: [
                {
                    title: "recipe",
                    ingredients: ingredients
                }
            ]
        }

        ingredients.map((ingredient, index) => {
            if (!ingredient.title || ingredient.amount <= 0)  {
                setError("Insert correct ingredients data")
            }
        })

        if (!recipeDescr) {
            setError("Provide recipe description")
        }

        if (!recipeTitle) {
            setError("Provide recipe title")
        }
        
        if (!error) {
            console.log("here")
            sendData(recipe)
            navigate('/my/own')
        }
    }

    const handleTitleChange = (event) => {
        setRecipeTitle(event.target.value)
        console.log(recipeTitle)
    }

    const handleDescriptionChange = (event) => {
        setRecipeDescr(event.target.value)
    }

    const handleIngrChange = (event, index) => {
        const ingrs = [...ingredients]
        ingrs[index][event.target.name] = event.target.value
        setIngredients(ingrs)
    }

    const onPlusIngredient = (e) => {
        e.preventDefault();
        setIngredients([...ingredients, empty_ingredient])
    }

    const onMinusIngredient = (event, index) => {
        event.preventDefault();
        const ingrs = [...ingredients]
        ingrs.splice(index, 1)
        setIngredients(ingrs)
    }

    return (
        <form onSubmit={handleSubmit} className="main-form">
            <div className="flex-column">
                <input
                    type="text"
                    className="common-input single-input mx-auto"
                    placeholder="Recipe title"
                    onChange={handleTitleChange}
                    value={recipeTitle}
                    required />
                <textarea
                    name="recipe-description"
                    className="w-95 area-input"
                    rows="3" onChange={handleDescriptionChange}
                    value={recipeDescr}
                    placeholder="Recipe Description"
                    required>
                </textarea>
                <div className="component-form">
                    <div className="ingredient-field"></div>
                    {ingredients.map((ingredient, index) => (
                        <div key={index} className="ingredient-feild">
                            <input
                                type="text"
                                className="form-input"
                                placeholder="Ingredient title" name="title"
                                value={ingredient.title} onChange={event =>
                                    handleIngrChange(event, index)}
                                required />

                            <input
                                type="number"
                                className="form-input"
                                placeholder="Amount"
                                name="amount"
                                value={ingredient.amount}
                                onChange={event => handleIngrChange(event, index)}
                                required />
                            <button
                                className="minus-btn"
                                onClick={event => onMinusIngredient(event, index)}>
                                <s>-</s>
                            </button>
                        </div>
                    ))}
                </div>
                <button onClick={onPlusIngredient} className="square-btn">+</button>
                {error ?
                    <div className="error-msg">
                        {error}
                    </div> :
                    <div></div>
                }
                <button onClick={handleSubmit} className="create-btn">Create</button>
            </div>
        </form>
    );
}

export default RecipeForm;