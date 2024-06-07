import CompoundCard from "./compoundcard";

const Compounds = () => {
    return (
        <>
            <button className="active-btn">New compound</button>
            <div className="compounds">
                <CompoundCard />
            </div>
        </>
    );
}

export default Compounds;