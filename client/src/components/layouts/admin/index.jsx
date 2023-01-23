import { Outlet, Link } from "react-router-dom";
import { logout } from "../../../services/auth.service";
import "./style.css";
export const AdminLayout = () => {
  const handleSideBar = (e) => {
    let sidebar = document.querySelector(".sidebar");
    sidebar.classList.toggle("active");
    if (sidebar.classList.contains("active")) {
      e.target.classList.replace("bx-menu", "bx-menu-alt-right");
    } else {
      e.target.classList.replace("bx-menu-alt-right", "bx-menu");
    }
  };
  const handleLogout = () => {
    logout();
  };

  return (
    <div>
      <div className="sidebar bg-gray">
        <div className="logo-details justify-content-center">
          <a href="/">
            {" "}
            <img src="/images/netflixlogo.png" width="100" alt="netflixlogo" />
          </a>
        </div>
        <ul className="nav-links sidelinks">
          <li>
            <Link to="/admin/movies" className="active">
              <i className="bx bx-grid-alt" />
              <span className="links_name">Movies</span>
            </Link>
          </li>

          <li className="log_out">
            <button className="logoutBtn d-flex align-items-center">
              <i className="bx bx-log-out" />
              <span className="links_name" onClick={handleLogout}>
                Log out
              </span>
            </button>
          </li>
        </ul>
      </div>
      <div className="home-section">
        <nav>
          <div className="sidebar-button">
            <i className="bx bx-menu sidebarBtn" onClick={handleSideBar} />
            <span className="dashboard">Dashboard</span>
          </div>
          <div className="search-box">
            <input type="text" placeholder="Search..." />
            <i className="bx bx-search" />
          </div>
        </nav>
        <div className="home-content">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
