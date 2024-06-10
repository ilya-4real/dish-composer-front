import { useState } from "react";

const CompoundForm = () => {
    const [inputs, setInputs] = useState([{ ingredient_name: "", ingredient_weight: 0 }])

    const onPlusClick = (event) => {
        event.preventDefault();
        setInputs([...inputs, { ingredient_name: "", ingredient_weight: 0 }])
    }

    const onMinusCLick = (event) => {
        event.preventDefault();s
        if (inputs.length > 1) {
            setInputs(inputs.filter((_, idx) => idx !== inputQuantity))
        }
    }

    return (
        <>
            <div>
                <form action="">
                    <input className="form-input" type="text" placeholder="compound title" />
                    <br />
                    Select compound category:
                    <select name="compound-category" id="cmpd-categoru" className="select-input">
                        <option value="meat">meat</option>
                        <option value="garnish">garnish</option>
                        <option value="sauce">meat</option>
                    </select>
                    <div className="flex-column">
                        {inputs.map((input, index) => (
                            <>
                                <div className="ingredient-feild">
                                    <input className="form-input-row" type="text" placeholder="ingredient name" />
                                    <input className="form-input-row" type="number" placeholder="weight" />
                                </div>
                            </>
                        ))}
                        <div className="ingredient-field">
                            <button className="square-btn" onClick={onPlusClick}>+</button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
}

export default CompoundForm;