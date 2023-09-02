import { useState } from "react"
import {LOGO_URL} from "../utils/constants"

const Header = () => {
    const [isLoggedin, setLoggedin] = useState(false);
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL}></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact us</li>
                    <li>Cart</li>
                    <li><button onClick={() => setLoggedin(!isLoggedin)} style={{width: "60px"}}>{isLoggedin ? 'Logout' : 'Login'}</button></li>
                </ul>
            </div>
        </div>
    )
}

export default Header