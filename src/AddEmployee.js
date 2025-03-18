import axios from "axios";
import React, { useState } from "react";

const AddEmployee = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState(0);
  const [emailId, setEmailId] = useState("");
  const [phone, setPhone] = useState(0);
  const [image, setImage] = useState("");
  const [error, setError] = useState("");
  const inputContainerStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    maxWidth: "400px",
    marginBottom: "10px",
  };

  const labelStyle = {
    minWidth: "120px",
    textAlign: "left",
    fontWeight: "bold",
  };

  const inputStyle = {
    flex: 1,
    padding: "5px",
    border: "1px solid #ccc",
    borderRadius: "5px",
  };

  const add = async () => {
    try {
      const response = await axios.post("http://localhost:8080/add", {
        fName: firstName,
        lName: lastName,
        age: age,
        phone: phone,
        image: image,
      });
      console.log(response, "response");
    } catch {
      setError("Please enter a different emailId");
    }
    // if(response)
  };

  const AddEmployee = () => {
    if (firstName === "" || lastName === "" || phone === 0 || emailId === "") {
      setError("Enter enter all the mandatory fields");
    } else {
      setError("");
      add();
    }
  };

  return (
    <div
      style={{
        background: "#fafaeb",
        textAlign: "center",
        margin: "0 auto",
        overflow: "hidden",
        width: "90vw",
      }}
    >
      <h1
        style={{
          alignContent: "center",
          color: "red",
        }}
      >
        Add Employee Form
      </h1>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "5vw",
          height: "80vh",
        }}
      >
        <img src="/AddEmployee.svg" alt="Logo" style={{ height: "70vh" }} />
        <div
          className="input-fields"
          style={{
            width: "20vw",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div style={inputContainerStyle}>
            <div style={labelStyle}>
              First Name
              <span style={{ color: "red " }}>*</span> :
            </div>
            <input
              placeholder="First Name"
              onChange={(e) => setFirstName(e.target.value)}
              style={inputStyle}
            />
          </div>
          <div style={inputContainerStyle}>
            <div style={labelStyle}>
              Last Name
              <span style={{ color: "red " }}>*</span> :
            </div>
            <input
              placeholder="Last Name"
              onChange={(e) => setLastName(e.target.value)}
              style={inputStyle}
            />
          </div>

          <div style={inputContainerStyle}>
            <div style={labelStyle}>
              Age
              <span style={{ color: "red " }}>*</span> :
            </div>
            <input
              placeholder="Age"
              onChange={(e) => setAge(e.target.value)}
              style={inputStyle}
            />
          </div>

          <div style={inputContainerStyle}>
            <div style={labelStyle}>
              Email Id
              <span style={{ color: "red " }}>*</span> :
            </div>
            <input
              placeholder="Email Id"
              onChange={(e) => setEmailId(e.target.value)}
              style={inputStyle}
            />
          </div>

          <div style={inputContainerStyle}>
            <div style={labelStyle}>
              Phone
              <span style={{ color: "red " }}>*</span> :
            </div>
            <input
              placeholder="Phone"
              onChange={(e) => setPhone(e.target.value)}
              style={inputStyle}
            />
          </div>

          <div style={inputContainerStyle}>
            <div style={labelStyle}>Enter Image :</div>
            <input
              type="file"
              onChange={(e) => setImage(e.target.value)}
              style={inputStyle}
            />
          </div>
          <button onClick={() => AddEmployee()} className="add-btn-inside">
            submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddEmployee;
