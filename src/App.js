import "./App.css";
import React, { useMemo } from "react";
import { useState, useRef, useEffect } from "react";
import ReactDOM from "react-dom/client";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState(0);
  const [showForm, setShowForm] = useState(false);
  useEffect(() => {
    const api = async () => {
      try {
        const response = await axios.get("http://localhost:8080/all"); // ✅ Fixed URL
        setData(response?.data); // ✅ Correctly setting state
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    api();
    console.log(data, "data");
  }, []);

  const remove = async (item) => {
    console.log(item, "item");
    const response = await axios.delete(
      `http://localhost:8080/employee/${item.id}`
    );
    const employeeRecord = await axios.get("http://localhost:8080/all");
    setData(employeeRecord?.data);
  };

  const edit = (item) => {};

  const func2 = (e) => {
    const arr2 = data.concat({ fName: firstName, lName: lastName, Age: age });
    setData(arr2);
  };

  const formFunction = useMemo(() => {
    return data?.map((item, id) => (
      <div key={id} className="todo-item">
        <div
          className="todo-name"
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          {item.fName}
        </div>
        <div
          className="todo-name"
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          {item.lName}
        </div>
        <div
          className="todo-age"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "start",
          }}
        >
          {item?.age}
        </div>
        <button
          onClick={() => edit(item)}
          className="remove-btn"
          style={{
            justifyContent: "flex-end",
          }}
        >
          Edit
        </button>
        <button
          onClick={() => remove(item)}
          className="remove-btn"
          style={{
            justifyContent: "flex-end",
          }}
        >
          Delete
        </button>
        <button
          className="remove-btn"
          style={{
            justifyContent: "flex-end",
          }}
        >
          View
        </button>
      </div>
    ));
  }, [data]);

  return (
    <div>
      {
        <header>
          <div className="logo">
            <h1>EMPLOYEE MANAGEMENT APP</h1>
          </div>
          <nav>
            <ul>
              <button
                style={{
                  color: "blueviolet",
                }}
                onClick={() => setShowForm(true)}
              >
                Add Employee
              </button>
            </ul>
          </nav>
        </header>
      }
      <div
        className="form-wrapper"
        style={{
          marginTop: "20px",
          width: "70vw",
          marginLeft: "15vw",
        }}
      >
        <div className="todo-item">
          <div
            className="todo-name"
            style={{
              fontWeight: "bold",
              fontSize: "4",
              display: "flex",
            }}
          >
            First Name
          </div>
          <div
            className="todo-name"
            style={{
              fontWeight: "bold",
              fontSize: "4",
              display: "flex",
            }}
          >
            Last Name
          </div>
          <div
            className="todo-age"
            style={{
              fontWeight: "bold",
              fontSize: "4",
              display: "flex",
            }}
          >
            Age
          </div>
          <div
            className="todo-age"
            style={{
              fontWeight: "bold",
              fontSize: "4",
              display: "flex",
              justifyContent: "end",
              width: "17%",
              marginRight: "53px",
            }}
          >
            Actions
          </div>
        </div>
        {/* {data?.map((item, id) => {
          return (
            <div key={id} className="todo-item">
              <div
                className="todo-name"
                style={{
                  display: "flex",
                  alignItems: "Center",
                }}
              >
                {item.fName}{" "}
              </div>
              <div
                className="todo-name"
                style={{
                  display: "flex",
                  alignItems: "Center",
                }}
              >
                {item.lName}{" "}
              </div>
              <div
                className="todo-age"
                style={{
                  display: "flex",
                  alignItems: "Center",
                  justifyContent: "start",
                }}
              >
                {item?.age}
              </div>
              <button
                onClick={() => edit(item)}
                className="remove-btn"
                style={{
                  justifyContent: "flex-end",
                }}
              >
                Edit
              </button>
              <button
                onClick={() => remove(item)}
                className="remove-btn"
                style={{
                  justifyContent: "flex-end",
                }}
              >
                Delete
              </button>
              <button
                // onClick={() => viewEmployee(item)}
                className="remove-btn"
                style={{
                  justifyContent: "flex-end",
                }}
              >
                View
              </button>
            </div>
          );
        })} */}
        {true && formFunction}
      </div>
      <br />
      {showForm && (
        <div className="input-fields">
          <input
            placeholder="First Name"
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
          ></input>
          <br />
          <input
            placeholder="Last Name"
            onChange={(e) => {
              setLastName(e.target.value);
            }}
          ></input>
          <br />
          <input
            placeholder="Age"
            onChange={(e) => {
              setAge(e.target.value);
            }}
          ></input>
          <br />
          <button onClick={func2} className="add-btn-inside">
            submit
          </button>
        </div>
      )}
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
export default App;
