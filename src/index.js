import React from "react";
import ReactDOM from "react-dom/client";
import { Greeting, UserCard } from "./Greting";
import Product, { Navbar } from "./Product";
import { Button } from "./Button";
import { TaskCard } from "./Task";
import { Saludar } from "./Saludar";
import { MyForm } from "./Form";
import { Posts } from "./Post";
import { Counter } from "./Counter";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

const users = [
  {
    id: 1,
    name: "User1",
    image: "https://robohash.org/user1",
  },
  {
    id: 2,
    name: "User2",
    image: "https://robohash.org/user2",
  },
];

root.render(
  <>
    <Counter></Counter>
    {users.map((user, index) => {
      return (
        <div key={index}>
          <h1>Hola {user.name}</h1>
          <img alt={user.name} src={user.image}></img>
        </div>
      );
    })}
    <Posts></Posts>
    <MyForm></MyForm>
    <Saludar></Saludar>
    <TaskCard></TaskCard>
    <Greeting title="Letter A" />
    <UserCard
      name="Name User"
      amount={1000}
      married={true}
      points={[99, 33.3, 22.2]}
      address={{ street: "stret User", city: "city User" }}
      greet={function () {
        alert("greet");
      }}
    />
    <Button text="text button" />
    <Greeting title="Letter B" />
    <Product ready={true} />
    <Navbar></Navbar>
    <Greeting title="Letter C" />
  </>
);
