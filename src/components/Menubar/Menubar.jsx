
import { Link, NavLink } from 'react-router-dom';
import './Menubar.css';
import { assets } from '../../assets/assets';
import { Logout } from '@mui/icons-material';
import { useContext } from 'react';
import { useNavigate ,useLocation} from 'react-router-dom';
import {AppContext} from '../../context/AppContext.jsx';

const Menubar = () => {

  const navigate=useNavigate();

  const location=useLocation();
  const {setAuthData,auth}=useContext(AppContext);

  const logout = () => {

    localStorage.removeItem("token");
    localStorage.removeItem("role");
    setAuthData(null,null);
    navigate("/login");
  }

  const isActive=(path)=>{
    return location.pathname===path;
  }

  const isAdmin = auth.role==="ROLE_ADMIN";

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
      {/* Brand Logo */}
      <Link className="navbar-brand" to="/dashboard">
        <img src={assets.logo} alt="Logo" height="40" />
      </Link>

      {/* Toggler Button */}
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      {/* Nav Links */}
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <NavLink className={`nav-link ${isActive('/dashboard') ? 'fw-bold ':''}`} to="/dashboard">
              Dashboard
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className={`nav-link ${isActive('/explore') ? 'fw-bold ':''}`}to="/explore">
              Explore
            </NavLink>
          </li>
          
          {isAdmin &&(
             <>
             <li className="nav-item">
            <NavLink className={`nav-link ${isActive('/items') ? 'fw-bold':''}`} to="/items">
              Manage Items
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className={`nav-link ${isActive('/category') ? 'fw-bold':''}`} to="/category">
              Manage Categories
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className={`nav-link ${isActive('/users') ? 'fw-bold':''}`} to="/users">
              Manage Users
            </NavLink>
          </li>
             </>
          )}
          <li className="nav-item">
            <NavLink className={`nav-link ${isActive('/orders') ? 'fw-bold':''}`} to="/orders">
              Order History
            </NavLink>
          </li>
        </ul>
        {/* User Profile Dropdown */}

        <ul className="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
          <li className="nav-item dropdown">
            <a href="#" className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              <img src={assets.profile} alt='' height={32} width={32} />
            </a>

            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
              <li>
                <a href="#!" className="dropdown-item">
                  Settings
                </a>
                </li>
                <li>
                <a href="#!" className="dropdown-item">
                  Activity log
                </a>
                </li>
                <li>
                  <hr className="dropdown-divider"/>
                </li>
                <li>
                <a href="#!" className="dropdown-item" onClick={logout}>
                  Log Out
                </a>
              </li>
            </ul>
          </li>
        </ul>


      </div>
    </nav>
  );
};

export default Menubar;



