import axios from "axios";
import { House } from "phosphor-react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

const AddEmployee = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState(0);
  const [emailId, setEmailId] = useState("");
  const [phone, setPhone] = useState(0);
  const [image, setImage] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [isSuccess, setIsSuccess] = useState(false);
  const warn = () =>
    toast.warn("Enter all the mandatory feilds", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "light",
      // transition: Bounce,
    });

  const success = () =>
    toast.success("Employee added successfully !", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "light",
      // transition: Bounce,
    });

  const fail = () =>
    toast.error("Employee with this emailId already exists", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "light",
      // transition: Bounce,
      style: {
        width: "auto", // Dynamic width
        maxWidth: "500px", // Limit maximum width
        whiteSpace: "normal", // Allow text wrapping
        wordWrap: "break-word", // Ensure long words break properly
        overflow: "hidden", // Prevent content overflow
        textOverflow: "ellipsis", // Add ellipsis for very long content
        padding: "12px 20px",
      },
    });

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
        emailId: emailId,
        image: image,
      });
      success();
      setIsSuccess(true);
      console.log(response, "response");
    } catch {
      fail();
      setError("Please enter a different emailId");
    }
    // if(response)
  };

  const AddEmployee = () => {
    if (
      firstName === "" ||
      lastName === "" ||
      phone === 0 ||
      emailId === "" ||
      age === 0
    ) {
      warn();
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
          {!true ? (
            <button onClick={() => AddEmployee()} className="add-btn-inside">
              submit
            </button>
          ) : (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "30px",
              }}
            >
              <button
                className="new-button-inside"
                onClick={() => navigate("/add")}
              >
                Add another Employee
              </button>
              <button
                className="home-button-inside"
                onClick={() => navigate("/")}
                style={{
                  margin: "0 auto",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <House size={18} />
                Go to home
              </button>
            </div>
          )}
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default AddEmployee;
