import "./style.scss"
import Nav from "./Nav.jsx"
import { Outlet } from 'react-router-dom'



function Navigation() {
    return (
        <>
            <div>
                <header>
                    <Nav />
                </header>

                <div className="outelet">
                    <Outlet/>
                </div>
            </div>
        </>
    );
}

export default Navigation;