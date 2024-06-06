const Searchbar = () => {
    return ( 
        <div className="searchbar">
            <div className="search">
                <input type="search" placeholder="search among all recipes"/>
                <button className="search-btn">🔍</button>
            </div>
        </div>
     );
}
 
export default Searchbar;