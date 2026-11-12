import React from "react";

function Navbar({ page, setPage }) {
  const links = ["Home", "Saved Jobs", "My Applications", "Post Job"];

  return (
    <nav className="navbar">
      <div className="logo" onClick={() => setPage("Home")}>
        Job<span>Connect</span>
      </div>

      <div className="nav-links">
        {links.map((link) => (
          <button
            key={link}
            className={page === link ? "active" : ""}
            onClick={() => setPage(link)}
          >
            {link}
          </button>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;
