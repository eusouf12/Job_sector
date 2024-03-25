import { Link } from "react-router-dom";


const ErrorsPage = () => {
    return (
        <div className="text-black">
            <h2>Oops !!!</h2>
           <Link to="/">Go to Home</Link>
        </div>
    );
};

export default ErrorsPage;