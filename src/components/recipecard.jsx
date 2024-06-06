import { useState } from "react";

const RecipeCard = () => {
    const [liked, setLiked] = useState(false);
    const [likes, setLikes] = useState(0);

    const Onlike = () => {
        if (liked === true) {
            setLiked(false)
            setLikes(likes - 1)
        } else{
            setLiked(true)
            setLikes(likes + 1)
        }
        console.log(liked)
    }

    return ( 
        <div className="recipe-card">
            <div className="recipe-header">
                <h4>
                    Title
                </h4>
            </div>
            <div className="recipe-content">
                <p>description</p>
            </div>
            <div className="recipe-footer">
                <div className="author footer-item">author: @il_ya_420</div>
                <div className="likes footer-item">
                    <button className="like-btn" onClick={Onlike}>{liked ? '🖤': '🤍'}</button> {likes}
                </div>
            </div>
        </div>
     );
}
 
export default RecipeCard;