import React from "react";
import {useState, useEffect} from "react"
import {useHistory} from "react-router-dom"
import NavigationBar from "./NavigationBar";


function UseMyList(){
    
    

    const [name, setName] = useState('');
    const [list, setList] = useState([]);
    const[allChoices, setAllChoices]=useState()
    const [restaurant, setRestaurant]=useState("")

    

  

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
      }
      


   

      const submitHandler = (event) => {
        event.preventDefault();
        setAllChoices(list);
        let count=0
        list.forEach((name)=>count++)
        const picked=getRandomInt(count)
        setRestaurant(allChoices[picked].name)
       document.getElementById("result").innerHTML=`${restaurant}`
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
        <form onSubmit={submitHandler}>
        <input
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <button onClick={() => {
            
          setList([
            ...list,
            { name: name }
          ]);
        }}>Add</button>
        <br/>
        <h3>Your List:</h3>
        <ol>
        {list.map(item => (
          <li >
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
      </ol>
      <br/>
      <h4>Decide from this list</h4>
      <button type="submit button">Choose</button>
      </form>
     <p id="result"></p>
 </div>
//conditionally render chosen restaurant

      
    );


    


}


export default UseMyList