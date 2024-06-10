import CompoundCard from "./compoundcard";
import { Link } from "react-router-dom";

const Compounds = () => {
    return (
        <>
            <Link className="mx-auto w-50" to="/compounds/new">
                <button className="active-btn">New compound</button>
            </Link>
            <div className="compounds">
                <CompoundCard />
            </div>
        </>
    );
}

export default Compounds;