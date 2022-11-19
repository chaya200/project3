import { Routes, Route } from "react-router-dom";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import "./Main.css";

function Main(): JSX.Element {
    return (
        <div className="Main">
			<Routes>
                <Route path="/Login" element={<Login/>}/>
                <Route path="/" element={<Home/>}/>
            </Routes>
        </div>
    );
}

export default Main;
