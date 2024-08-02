
import './App.css';
import React from 'react';
import { useState,useRef,useEffect } from 'react';
import ReactDOM from "react-dom/client";

// const countries =[
//   {name:'India' , value:'IN' , cities :[
//     'Delhi',
//     'Mumbai'
//   ]},
//   {name:'Pak' , value:'pk' , cities :[
//     'Islamabad',
//     'Karachi'
//   ]},
//   {name:'China' , value:'Ch' , cities :[
//     'Beijeing',
//     'Korea'
//   ]}  
// ]



function App() {
  const datad=[
    {
      Name:"Vinod",
      Age:22
    },
    {
      Name:"Thapa",
      Age:23
    }
  ]
  const [data,setData] = useState(datad);
  const [name,setName] =useState("");
  const [age,setAge]=useState(0);
  const [showForm, setShowForm] = useState(false);
  //const [count,setCount] = useState(0);
  
  const func =(item)=>{
    // console.log(id)
    if(data.length>1 )
    {
      const newArr = data.filter((i) => i !== item);
      
      setData(newArr)
    }
    else if(data.length==1)
    {
      const newArr = data.filter((i) => i !== item);
      setData(newArr)
      alert("last item !")
    }
    else{
      const newArr =data.concat({Name:"lastguy",Age:"100"})
      setData(newArr)
    }
  }

  const func2 = (e) => {
    const arr2 = data.concat({ Name:  name , Age:  age  });
    setData(arr2);
  };
  function func1(){
    setShowForm(true);
  }
  return (

    <div>
      {
        <header>
        <div className="logo">
          <h1>TO-DO APP</h1>
        </div>
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
      </header>
      }
      {
        data.map((item,id)=>{
          return(
            <div  key={id} className='todo-item'>
              <span className='todo-name'>Name:{item.Name} </span>
              <span className='todo-age'> Age:{item.Age}</span>
              <button onClick={()=>func(item)}className='remove-btn'>
                remove
              </button>
            </div>
          )
        })
      }
      {
        <button onClick={func1} className="add-btn">add</button>
      }
      <br />
      {showForm && (
        <div className="input-fields">
          <input placeholder="Name" onChange={(e)=>{setName(e.target.value)}}></input>
          <br />
          <input placeholder="Age"onChange={(e)=>{setAge(e.target.value)}}></input>
          <br />
          <button onClick={func2} className="add-btn-inside" >submit</button>
        </div>
      )}
          
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
export default App;
