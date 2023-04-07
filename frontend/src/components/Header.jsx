import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../features/auth/authSlice";
import logo from "../assets/goal_icon.png";

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };

  return (
    <header className="flex justify-between items-center py-5 px-0 border-b border-solid border-[#e6e6e6] mb-14 max-sm:flex-col max-sm:justify-between">
      <div className="m-2">
        <Link to="/">
          <h1>GoalMaster</h1>
        </Link>
      </div>
      <div clasName="m-2">
        <img src={logo} alt="app_logo" className="h-12" />
      </div>
      <ul className=" m-2 flex item-center justify-between">
        {user ? (
          <li className="m-auto">
            <button className="btn" onClick={onLogout}>
              <FaSignOutAlt /> Logout
            </button>
          </li>
        ) : (
          <>
            <li>
              <Link className="active flex item-center " to="/login">
                <FaSignInAlt className="svg-icon" /> Login
              </Link>
            </li>
            <li>
              <Link className="active flex item-center" to="/register">
                <FaUser className="svg-icon" /> Register
              </Link>
            </li>
          </>
        )}
      </ul>
    </header>
  );
}

export default Header;
