import { NavLink } from "react-router-dom";
import "./Header.css";

function Header(): JSX.Element {
    return (
        <div className="Header">
			<h1>vacation</h1>
            <NavLink  to="/">Login</NavLink>
            <span> | </span>
            <NavLink  to="/register">New User?</NavLink>
            <span> | </span>
            <NavLink  to="/admin/report">Report</NavLink>
        </div>
    );
}

export default Header;
