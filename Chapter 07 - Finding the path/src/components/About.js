import image from "../../assets/burger.png"
import image1 from "../../assets/about.png"
import { Link } from "react-router-dom";

const About = () => {
    return (
        <div className="main">
            <h1>About <span>SwigZo</span></h1>
            <div className="aboutContent">
                <div className="left">
                    <h2>Our Story</h2>
                    <p>At <span>SwigZo</span>, we believe that great food should be within everyone's reach, no matter where you are or how busy your schedule is. Our journey began with a simple yet powerful idea: to connect food lovers with the best local restaurants, making delicious meals accessible at the tap of a button.</p>
                    <Link to="/">Explore Menu</Link>
                </div>
                <div className="right">
                    <img src={image} />
                </div>
            </div>
            <p>Easy Order Steps</p>
            <div className="aboutContent">
                <img src={image1} />
            </div>
        </div>
    )
}

export default About;