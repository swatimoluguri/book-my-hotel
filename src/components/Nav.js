import Logo from "../logo.png";


const Nav = () => {
    return (
        <>
            <nav>
                <div className="bg-img">
                    <div className="navbar">
                        <div className="logo">
                            <img className="logo" src={Logo} alt="logo" />
                        </div>
                        <div className="Nav-links">
                            <ul>
                                <li title="Home">Home</li>
                                <li title="Explore">Explore</li>
                                <li title="About">About</li>
                                <li title="Login/Signup">Login/Signup</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>

        </>
    );
}
export default Nav;