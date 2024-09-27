import { NavLink, useLocation } from "react-router-dom";
import { Button, Navbar } from "react-bootstrap";
import { useCallback, useState } from "react";
import useTheme from "../hooks/use-theme";
export default function BurgerMenu() {
  const activateLink = useCallback(
    ({ isActive }) =>
      isActive
        ? `text-success  text-shadow nav-link fs-1`
        : ` text-light text-shadow text-shadow nav-link fs-1`,
    []
  );

  const [theme, toggleTheme] = useTheme();

  const location = useLocation();

  const isSignInPage = location.pathname === "/";

  const [menuState, setMenuState] = useState(false);

  const openMenuHandler = () => {
    setMenuState((prev) => !prev);
  };

  if (isSignInPage) {
    return null;
  }
  return (
    <>
      <Button
        variant="secondary"
        className="m-4"
        style={{
          position: "absolute",
          top: "10px",
          left: "0px",
          zIndex: 1,
        }}
        onClick={openMenuHandler}
      >
        ←
      </Button>
      <div
        style={{
          width: menuState ? "20vw" : "0",
          height: "100vh",
          overflow: "hidden",
          backgroundColor: theme === "light" ? "#1a1a1a" : "#DCDCDC",
        }}
        className="m-0 border-end"
      >
        <Navbar className="m-auto d-flex flex-column list-unstyled ">
          <Button
            className=""
            variant={theme === "light" ? "dark" : "light"}
            onClick={toggleTheme}
          >
            {theme}
          </Button>

          <li>
            <NavLink className={activateLink} to="/main">
              Main
            </NavLink>
          </li>
          <li>
            <NavLink className={activateLink} to="/user-list">
              UserList
            </NavLink>
          </li>
        </Navbar>
        <NavLink
          className={activateLink}
          style={{ marginTop: "70vh", textAlign: "center" }}
          to="/"
        >
          Sing in
        </NavLink>
      </div>
    </>
  );
}
