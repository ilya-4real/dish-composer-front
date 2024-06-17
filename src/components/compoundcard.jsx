const CompoundCard = ({ compound }) => {
    console.log(compound)
    return ( 
        <div className="compound-card">
            <div className="compound-title">
                <h4>{compound.title}</h4>
            </div>
            <div className="compound-author">
                category: {compound.category}
            </div>
        </div>
     );
}
 
export default CompoundCard;