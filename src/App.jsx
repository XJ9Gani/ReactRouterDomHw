import "bootstrap/dist/css/bootstrap.css";
import "./style/style.scss";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes, BurgerMenu } from "./component";
import { Navbar } from "react-bootstrap";
export default function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar direction="horizontal" className="p-0">
          <BurgerMenu />

          <AppRoutes />
        </Navbar>
      </BrowserRouter>
    </>
  );
}
