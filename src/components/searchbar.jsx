import SearchSuggestions from "./searchsuggestions";
import { useState } from "react";
import Api from "../api/api";

const Searchbar = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [suggestions, setSuggesions] = useState([]);
    
    const fetchData = (value) => {
        Api.get(`recipies/search?q=${value}`).then((resp) => {
            if (resp.status === 200 && value.length > 0) {
                setSuggesions(resp.data.recipes)
            }else {
                setSuggesions([])
            }
        })
    }

    const onSearchChange = (event) => {
        const term = event.target.value
        setSearchTerm(term)
        fetchData(term)
    }


    return (
        <div className="searchbar">
            <div className="search">
                <input type="text" className="shadowed" placeholder="search among all recipes" value={searchTerm} onChange={onSearchChange}/>
                {suggestions.length > 0 &&
                <SearchSuggestions suggestions={suggestions}/>
                }
            </div>
        </div>
    );
}

export default Searchbar;