import { useState } from "react";
import { Link } from "react-router-dom";

const RecipeCard = ({ recipe }) => {

    return ( 
        <div className="recipe-card">
        <Link to={`/recipe/${recipe.oid}`}>
            <div className="recipe-header">
                <h4>
                    {recipe.title}
                </h4>
            </div>
            <div className="recipe-content">
                <p>{recipe.description}</p>
            </div>
            <div className="recipe-footer">
                <div className="author footer-item">author: @{recipe.author}</div>
                <div className="likes footer-item">
                    <img src="dark-heart.png" alt="heart" className="heart-img" /> {recipe.likes}
                </div>
            </div>
        </Link>
        </div>
     );
}
 
export default RecipeCard;