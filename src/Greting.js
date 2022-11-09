export function Greeting(props) {
  const name = "";
  const married = false;
  const user = { firstName: "firstName", lastname: "lastName" };

  if (married) return <h1>"Yes Marrid"</h1>;

  function add(x, y) {
    return x + y;
  }

  return (
    <div style={{background: '#233320', color: '#fff', padding: '20px'}}>
      <h1>{name === "" ? JSON.stringify(user) : name}</h1>
      <h2>{user.firstName}</h2>
      <h2>{user.lastname}</h2>
      <p>Lorem {married.toString() + ", " + props.title}</p>
      <p>{add(10, 30)}</p>
    </div>
  );
}

export function UserCard({ name, amount, married, address, greet }) {
  console.log(name, amount, married, address, greet);
  //greet()
  return (
    <div>
      <h1>{name}</h1>
      <p>${amount}</p>
      <p>{married ? "married" : "single"}</p>
      <ul>
        <li>City: {address.city}</li>
        <li>Address: {address.street}</li>
      </ul>
    </div>
  );
}
