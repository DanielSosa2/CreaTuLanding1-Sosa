import CartWidget from "./CartWidget";
import logo from "../assets/logo.png";

const NavBar = () => {
  return (
    <nav style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "15px 30px",
      backgroundColor: "#1e1e2f",
      color: "white"
    }}>

      {/* Logo */}
      <img src={logo} alt="logo" style={{
        width: "100px",
        height: "100px",
        borderRadius: "50%",
        objectFit: "cover",
        border: "2px solid lightblue"
      }} />

      {/* Links */}
      <ul style={{
        display: "flex",
        gap: "25px",
        listStyle: "none",
        margin: 0,
        padding: 0
      }}>
        {/* Para que la Nav sea "clickeable"(es temporal)*/}
        <li><a href="#">Inicio</a></li>
        <li><a href="#">Productos</a></li>
        <li><a href="#">Contacto</a></li>
      </ul>

      {/* Carrito */}
      <CartWidget />

    </nav>
  );
};

export default NavBar;