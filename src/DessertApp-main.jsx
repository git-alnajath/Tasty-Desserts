import React, { useEffect, useState } from "react";
import "./App.css";
import { FaSearch } from "react-icons/fa";
import { CiViewTable } from "react-icons/ci";
import pic1 from "./assets/ph1.webp";
import pic2 from "./assets/ph2.jpeg";
import pic3 from "./assets/ph3.jpeg";
import pic4 from "./assets/ph4.jpeg";
import pic5 from "./assets/ph5.jpeg";
import pic6 from "./assets/ph6.jpeg";
import pic7 from "./assets/ph7.jpeg";
import pic8 from "./assets/ph8.jpeg";
import pic9 from "./assets/ph9.jpeg";
import Project from "./DessertApp-card";

export default function DessertApp_main() {
  const arr = [
    {
      id: 1,
      name: "Cup Cake",
      price: 150,
      photo: pic1,
    },
    {
      id: 2,
      name: "Caramel Cake",
      price: 200,
      photo: pic2,
    },
    {
      id: 3,
      name: " Cold Coffee",
      price: 100,
      photo: pic3,
    },
    {
      id: 4,
      name: "Fruits Salad",
      price: 150,
      photo: pic4,
    },
    {
      id: 5,
      name: "Strawberry Cake",
      price: 200,
      photo: pic5,
    },
    {
      id: 6,
      name: "Chocolate Driffle",
      price: 250,
      photo: pic6,
    },
    {
      id: 7,
      name: "IceCream Brownie",
      price: 90,
      photo: pic7,
    },
    {
      id: 8,
      name: "Chocolatey Chocolate",
      price: 300,
      photo: pic8,
    },
    {
      id: 9,
      name: "Cookies",
      price: 49,
      photo: pic9,
    },
  ];

  let [val, setval] = useState(true);
  let [inp, setinp] = useState(true);
  let [count, setcount] = useState(0);
  let [data2, setdata2] = useState("");

  let [propesobj, setpropsobj] = useState([]);
  let [total, settotal] = useState(0);
  let [howmany, sethowmany] = useState([]);

  const inc = (getprops) => {
    setcount(count + 1);
    let result = propesobj.some((item) => item.id === getprops.id);
    if (!result) {
      setpropsobj((data) => [...data, getprops]);
    }
    settotal(() => total + getprops.rs);

    sethowmany((data) => [...data, getprops.id]);
  };

  const stor = (e) => {
    setdata2(e.target.value);
  };

  const detail = () => {
    if (val == true) {
      setval(false);
      console.log(val);
    } else {
      setval(true);
    }
  };

  const inpt = () => {
    if (inp == true) {
      setinp(false);
      console.log(val);
    } else {
      setinp(true);
    }
  };

  return (
    <div className="overall">
      <div className="navbar">
        <div className="nav-left">
          <h3>
            <span>TASTY</span> DESSERTS
          </h3>
        </div>

        <input
          placeholder={"Search here"}
          className={inp == true ? "int1" : "int"}
          onChange={stor}
        />

        <div className="nav-right">
          <h2 onClick={inpt}>
            <FaSearch />
          </h2>
          <h2 onClick={detail}>
            <CiViewTable />
            {count > 0 ? <sup>{count}</sup> : null}
          </h2>
        </div>
      </div>
      <div className={val == true ? "details2" : "details"}>
        <h1>Bill</h1>

        <table>
          <tr>
            <th>Name</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
          <tbody>
            {propesobj.map((it) => (
              <tr>
                <td>
                  <b>{it && it.nam}</b>
                </td>
                <td>
                  <b>{howmany.filter((item) => item == it.id).length}</b>
                </td>
                <td>
                  <b>{it && it.rs}</b>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="total">
          <b>Total:</b>
          <b>{total}</b>
        </div>
      </div>

      <div className="box">
        {arr.map((item) =>
          item.name.toLocaleLowerCase().includes(data2) ? (
            <Project
              id={item.id}
              nam={item.name}
              picname={item.photo}
              rs={item.price}
              number={inc}
            />
          ) : null
        )}
      </div>
    </div>
  );
}
