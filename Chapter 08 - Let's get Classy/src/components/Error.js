import { Link, useRouteError } from "react-router-dom";
import error404img from "../../assets/404_Error.png"

const Error = () => {
    const error = useRouteError();
    console.log(error);
    return (
        <div className="errorContainer">
            <div>
                <img src={error404img} />
            </div>
            <div className="errorMsg">
                <p>Oops! Page Not Found.</p>
                <p>{error.data}</p>
            </div>
            <Link to="/">Back to Home</Link>
        </div>
    )
}

export default Error;