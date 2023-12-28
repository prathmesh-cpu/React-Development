import Logo from "../../assets/swigzo.svg";
import { useState } from "react";

const Header = () => {

    const [isLogin, setIsLogin] = useState(true);

    return (
        <nav className='navbar' id='top'>
            <a href="/">
                <img className='logo' src={Logo} ></img>
            </a>
            <div className='navItems'>
                <li><a href='#'>Home</a></li>
                <li><a href='#'>Menu</a></li>
                <li><a href='#'>About Us</a></li>
                <li><a href='#'>Contact Us</a></li>
                <li><a href='#'><i className="fa-duotone fa-cart-shopping"></i></a></li>
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