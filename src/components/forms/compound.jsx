import { useState } from "react";
import Api from "../../api/api";
import { useNavigate } from "react-router-dom";

const CompoundForm = () => {
    const [title, setTitle] = useState('')
    const [ingredients, setIngredients] = useState([{ title: "", amount: 0 }])
    const [category, setCategory] = useState("none")
    const [err, setErr] = useState('')
    const navigate = useNavigate()

    const onPlusClick = (event) => {
        event.preventDefault();
        setIngredients([...ingredients, { title: "", amount: 0 }])
    }

    const handleIngredientChange = (event, index) => {
        const ingrs = [...ingredients]
        ingrs[index][event.target.name] = event.target.value
        setIngredients(ingrs)
        checkData()
    }

    const handleCategoryChange = (event) => {
        console.log(event.target.value)
        setCategory(event.target.value)
        checkData()
    }

    const handleTitleChange = (event) => {
        setTitle(event.target.value)
        checkData()
    }

    const onMinusCLick = (event, index) => {
        event.preventDefault()
        const ingrs = [...ingredients]
        ingrs.splice(index, 1)
        setIngredients(ingrs)
    }

    const sendData = (component) => {
        Api.post('/components', component).then((resp) => {
            console.log(resp)
        })
    }

    const checkData = () => {
        setErr("")
        ingredients.map((ingredient, index) => {
            if (ingredient.title.length <= 5 || ingredient.amount < 2) {
                setErr("Incorrect ingredient data")
            }
            if (category === 'none') {
                setErr("Category must be selected")
            }
            if (title.length <= 5) {
                setErr("Title shouldn't be that short")
            }
        })

    }

    const handleSubmit = (event) => {
        event.preventDefault()
        if (!err) {
            console.log(err.length)
            const component = {
                title: title,
                component_category: category,
                ingredients: ingredients,
            }
            console.log(component)
            sendData(component)
            navigate('/compounds/meat')
        }

    }

    return (
        <>
            <form onSubmit={handleSubmit} className="main-form">
                <div className="flex-column">
                    <input
                        className="form-input"
                        type="text"
                        placeholder="compound title"
                        value={title}
                        onChange={handleTitleChange} />
                    <select 
                    name="type-select" 
                    id="" onChange={handleCategoryChange} 
                    className="form-input select-input marg5" value={category}
                    >
                        <option disabled value="none">Select compound category...</option>
                        <option value="meat">Meat</option>
                        <option value="garnish">Garnish</option>
                        <option value="sauce">Sauce</option>
                    </select>
                    {ingredients.map((ingredient, index) => (
                        <div key={index} className="ingredient-feild">
                            <input
                                className="form-input-row"
                                type="text"
                                placeholder="ingredient title"
                                name="title"
                                required
                                value={ingredient.title}
                                onChange={event => handleIngredientChange(event, index)} />

                            <input
                                className="form-input-row"
                                type="number"
                                placeholder="weight"
                                name="amount"
                                required
                                value={ingredient.amount}
                                onChange={event => handleIngredientChange(event, index)}
                            />
                            <button
                                className="minus-btn"
                                onClick={event => onMinusCLick(event, index)}>
                                <s>-</s>
                            </button>
                        </div>
                    ))}
                    <button className="square-btn" onClick={onPlusClick}>+</button>
                    {err ?
                        <div className="error-msg">
                            {err}
                        </div> :
                        <div></div>
                    }
                    <button onClick={handleSubmit} className="create-btn">Create</button>
                </div>
            </form>
        </>
    );
}

export default CompoundForm;