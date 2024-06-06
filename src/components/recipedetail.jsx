import { useState } from "react";

const RecipeDetail = () => {
    const [liked, setLiked] = useState(false);

    const onLike = () => {
        if (liked === true) {
            setLiked(false)
        } else{
            setLiked(true)
        }
    }

    return (
        <div className="recipe-detail">
            <div>
                <div className="recipe-header">
                    <div className="empty"></div>
                    <div className="recipe-btn">
                        <button className="like-btn" onClick={onLike}>{liked ? '🖤': '🤍'}</button>
                    </div>
                </div>
                <center><h4>Contrary to popular belief, Lorem Ipsum is not simply random text.</h4></center>
            </div>
            <span>
                <p>Contrary to popular belief, Lorem Ipsum is not simply random text.
                    It has roots in a piece of classical Latin literature from 45 BC,
                    making it over 2000 years old.
                </p>
            </span>
            <div className="compound">
                <center><h5>meat</h5></center>
                <div className="ingredient">
                    <div className="ingredient-title">Chicken breast</div>
                    <div className="ingredient-weight">500g</div>
                </div>
                <div className="ingredient">
                    <div className="ingredient-title">Salt</div>
                    <div className="ingredient-weight">2g</div>
                </div>
                <div className="ingredient">
                    <div className="ingredient-title">Pepper</div>
                    <div className="ingredient-weight">2g</div>
                </div>
            </div>

            <div className="compound">
                <center><h5>garnish</h5></center>
                <div className="ingredient">
                    <div className="ingredient-title">Grecha</div>
                    <div className="ingredient-weight">200g</div>
                </div>
                <div className="ingredient">
                    <div className="ingredient-title">Onion</div>
                    <div className="ingredient-weight">100g</div>
                </div>
                <div className="ingredient">
                    <div className="ingredient-title">Carrot</div>
                    <div className="ingredient-weight">200g</div>
                </div>
            </div>
        </div>
    );
}

export default RecipeDetail;