import CompoundCard from "./compoundcard";
import { useLocation, Link, useParams } from "react-router-dom";
import CompoundsNavigator from "./compounds_navigator";
import { useEffect, useState } from "react";
import Api from "../api/api";
import Loader from "./loader";

const Compounds = () => {
    const { type } = useParams()
    const [compounds, setCompounds] = useState([])
    const [loading, setLoading] = useState(true)

    const fetchData = () => {
        setLoading(true)
        Api.get(`components/?category=${type}`).then((resp) => {
            console.log(resp.data)
            setCompounds(resp.data.components)
            setLoading(false)
        })
    }

    useEffect(() => {
        fetchData()
    }, [type])

    return (
        <>
            <CompoundsNavigator />
            <Link className="flex" to="/compounds/new">
                <button className="active-btn">New compound</button>
            </Link>
            {
                loading ? <Loader /> :
                    <>
                        {compounds.map((compound, index) => (
                            <div key={index} className="compounds">
                                <CompoundCard compound={compound} />
                            </div>
                        ))}
                    </>
            }
        </>
    );
}

export default Compounds;