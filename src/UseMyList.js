import React from "react";
import {useState, useEffect} from "react"
import {useHistory} from "react-router-dom"
import NavigationBar from "./NavigationBar";


function UseMyList(){
    let nextId = 0;
    

    const [name, setName] = useState('');
    const [list, setList] = useState([]);

    

  

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
      }
      
      function NewRestaraunt(){
          return getRandomInt(list.length)
      }
  
    return (
      <div>
          <div>
    <div className="row pb-5">
      <div className="d-flex justify-content-center bg-dark text-white p-5">
    <h1>Decide Dinner</h1>
  
    </div>
    <NavigationBar/>
    </div>
    </div>
    
    
        <h1>Add restaurants:</h1>
        <input
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <button onClick={() => {
          setList([
            ...list,
            { id: nextId++, name: name }
          ]);
        }}>Add</button>
        <br/>
        <h3>Your List:</h3>
        <ul>
        {list.map(item => (
          <li key={item.id}>
            {item.name}{' '}
            <button onClick={() => {
              setList(
                list.filter(a =>
                  a.name !== item.name
                )
              );
            }}>
              Delete
            </button>
          </li>
        ))}
      </ul>
      <br/>
      <h4>Decide from this list</h4>
      <button>Choose</button>
     
 </div>


      
    );


    


}


export default UseMyList