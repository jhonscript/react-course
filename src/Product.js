import "./style.css";

function Product({ ready }) {
  return (
    <div className={ready ? "product" : ""}>
      <h1>Producto</h1>
      <span
        style={ready ? { background: "blue" } : { background: "red" }}
      >
        {ready ? "Si hay productos" : "No hay productos"}
      </span>
    </div>
  );
}

export function Navbar() {
  return <nav>navigation</nav>;
}

export default Product;
