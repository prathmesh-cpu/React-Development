import Logo from "../../assets/swigzo.svg";

const Header = () => (
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
        </div>
    </nav>
);

export default Header;