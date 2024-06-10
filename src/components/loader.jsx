import { HashLoader } from "react-spinners";

const Loader = () => {
    const CSSprops = {
        display: "block",
        margin: "auto",
    } 

    return ( 
        <div className="mt-150">
            <HashLoader color={"orange"} size={100} cssOverride={CSSprops}/>
        </div>
     );
}
 
export default Loader;