import { Link } from "react-router-dom";

const SearchSuggestions = ({ suggestions }) => {
    return ( 
        <div className="suggestions flex-column shadowed">
        {suggestions.map((suggestion, index) => (
            <Link key={index} className="suggestion-item" to={`/recipe/${suggestion.oid}`}>{suggestion.title}</Link>
        ))}
        </div>
     );
}
 
export default SearchSuggestions;