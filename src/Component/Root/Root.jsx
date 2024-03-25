import { Outlet } from "react-router-dom";
import Footers from "../Footers/Footers";
import Headers from "../Headers/Headers";



const Root = () => {
    return (
        <div>
            
           
           
            <div className="max-w-6xl mx-auto">
            <Headers></Headers>
            <Outlet></Outlet>
            </div>
            <Footers></Footers>
            
        </div>
    );
};

export default Root;