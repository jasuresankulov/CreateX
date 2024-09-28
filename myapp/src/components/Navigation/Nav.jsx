import {Link} from "react-router-dom"

function Nav() {
 

    return ( 
        <>
            <div className="nav-wrapper">
                <div className="logo">
                    <Link to={'/'}><h2>CREATE</h2></Link>
                </div>

                <div className="menu">
                    <div className="nav-links">
                        <Link to={"/about"}>About Us</Link>
                        <Link to={"/services"}>Services</Link>
                        <Link to={"/work"}>Work</Link>
                        <Link to={"/news"}>News</Link>
                        <Link to={"/contacts"}>Contacts</Link>
                    </div>
                </div>
            </div>
        </>
     );
}
export default Nav;