import { useState } from "react";

const CompoundForm = () => {
    const [title, setTitle] = useState('')
    const [ingredients, setIngredients] = useState([{ title: "", amount: 0 }])
    const [category, setCategory] = useState("none")
    const [error, setError] = useState('')

    const onPlusClick = (event) => {
        event.preventDefault();
        setIngredients([...ingredients, { title: "", amount: 0 }])
    }

    const handleIngredientChange = (event, index) => {
        const ingrs = [...ingredients]
        ingrs[index][event.target.name] = event.target.value
        setIngredients(ingrs)
    }

    const handleCategoryChange = (event) => {
        console.log(event.target.value)
        setCategory(event.target.value)
    }

    const handleTitleChange = (event) => {
        setTitle(event.target.value)
    }

    const onMinusCLick = (event, index) => {
        event.preventDefault()
        const ingrs = [...ingredients]
        ingrs.splice(index, 1)
        setIngredients(ingrs)
    }

    const handleSubmit = (event) => {
        event.preventDefault()

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
                    onChange={handleTitleChange}/>
                    <select name="type-select" id="" onChange={handleCategoryChange} className="form-input select-input marg5" defaultValue={'none'}>
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
                    <button onClick={handleSubmit} className="create-btn">Create</button>
                </div>
            </form>
        </>
    );
}

export default CompoundForm;