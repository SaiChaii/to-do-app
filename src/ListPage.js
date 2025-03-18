import axios from "axios";
import React, { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

const ListPage = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

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
    await axios.delete(`http://localhost:8080/employee/${item.id}`);
    const employeeRecord = await axios.get("http://localhost:8080/all");
    setData(employeeRecord?.data);
  };

  const edit = (item) => {};

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
                onClick={() => {
                  navigate("/add");
                }}
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
        {true && formFunction}
      </div>
      <br />
    </div>
  );
};

export default ListPage;
