import React from "react";
import {useState, useEffect} from "react"
import {useHistory} from "react-router-dom"
import NavigationBar from "./NavigationBar";


function UseMyList(){
    const history=useHistory()
    
    

    const [name, setName] = useState('');
    const [list, setList] = useState([]);
    const[allChoices, setAllChoices]=useState()
    const [restaurant, setRestaurant]=useState("")

    

  

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
      }
      


   

      const submitHandler = (event) => {
        event.preventDefault();
        if(list.length>2){
        setAllChoices(list);
        let count=0
        list.forEach((name)=>count++)
        const picked=getRandomInt(count)
        setRestaurant(allChoices[picked].name)
       document.getElementById("result").innerHTML=`Your choice is: ${restaurant}`}
      }
  
    return (
        
      <div>
       
    
    
    
    <div className="d-flex justify-content-center">
        <h2>Add restaurants:</h2>
        </div>
        <div className="d-flex justify-content-center">
        <form onSubmit={submitHandler}>
        <input
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <button className="btn btn-success" onClick={() => {
            
          setList([
            ...list,
            { name: name }
          ]);
        }}>Add</button>
        <br/>
        <h3>Your List:</h3>
        <ol>
            
        {list.map(item => (
            <div className="card">
            <div className="row card-body d-flex justify-content-center">
        <div className="col-6">
          <li>
            {item.name}{' '}
          </li>
          </div>
          <div className="col-6">
          <button className="btn btn-danger" onClick={() => {
              setList(
                list.filter(a =>
                  a.name !== item.name
                )
              );
            }}>
              Delete
            </button>
            </div>
          </div>
          </div>
        ))}
        
      </ol>
      <br/>
      <div className="d-flex justify-content-center">
      <button type="submit button" className="col-6 btn btn-lg btn-dark">Choose</button>
      </div>
      </form>
      </div>
      
      <br/>
      <div className="d-flex justify-content-center">
     <h3 id="result">Your choice will appear here.</h3>
     </div>
     <br/>

     <div className="d-flex justify-content-center">
      <button type="button" className="col-3 btn btn-lg btn-warning" onClick={()=>history.go(0)}>Start Over</button>
      </div>

 </div>
//conditionally render chosen restaurant

      
    );


    


}


export default UseMyList