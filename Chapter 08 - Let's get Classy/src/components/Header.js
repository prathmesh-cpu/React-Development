import Logo from "../../assets/swigzo.svg";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {

    const [isLogin, setIsLogin] = useState(true);

    return (
        <nav className='navbar' id='top'>
            <Link to="/">
                <img className='logo' src={Logo} ></img>
            </Link>
            <div className='navItems'>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/'>Menu</Link></li>
                <li><Link to='/about'>About Us</Link></li>
                <li><Link to='/contact'>Contact Us</Link></li>
                <li><Link to='#'><i className="fa-duotone fa-cart-shopping"></i></Link></li>
                <li>
                    {
                        isLogin ? (
                            <button className="login" onClick={() => {
                                setIsLogin(false);
                            }}>Log In</button>
                        ) : (
                            <button className="logout" onClick={() => {
                                setIsLogin(true);
                            }}>Log Out</button>
                        )
                    }
                </li>
            </div>
        </nav>
    )
};

export default Header;