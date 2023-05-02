import "./User.css";
import UserVacationList from "../UserVacationList/UserVacationList";

function User(): JSX.Element {
    return (
        <div className="User">
			<main><UserVacationList/></main>
        </div>
    );
}

export default User;
