const GeneratedRecipe = ({ recipe }) => {
    console.log(recipe)
    return (
        <>
        <div className="recipe-detail">
            <center><h4>{recipe.title}</h4></center>
            {
                recipe.components.map((component, index) => (
                    <div key={index} className="compound">
                        <center><h5>{component.title}</h5></center>
                        {
                            component.ingredients.map((ingredient, index) => (
                                <div key={index} className="ingredient">
                                    <div className="ingredient-title">{ingredient.title}</div>
                                    <div className="ingredient-weight">{ingredient.amount}g</div>
                                </div>
                            ))
                        }
                    </div>
                ))
            }
        </div>
        </>
     );
}
 
export default GeneratedRecipe;