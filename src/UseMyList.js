import React from "react";
import {useState} from "react"
import {useHistory} from "react-router-dom"
import Header from "./Header";


function UseMyList(){
    const history=useHistory()
    
    

    const [name, setName] = useState('');
    const [list, setList] = useState([]);
    const [restaurant, setRestaurant]=useState("")

    

  

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
      }
      


   

      const submitHandler = (event) => {
        event.preventDefault();
        if(list.length>2){
      
        let count=list.length
        const picked=getRandomInt(count)
        setRestaurant(list[picked].name)
       document.getElementById("result").innerHTML=`Your choice is: ${restaurant}`}
      }
  
    return (
        
      <div>
       
    <Header/>
    
    
    <div className="d-flex justify-content-center pt-3">
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
        
            
        {list.map(item => (
            
            <div className="row d-flex justify-content-center">
        <div className="col-6">
          <p>
            {item.name}{' '}
          </p>
          </div>
          <div className="col-6 pb-2">
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
           
        ))}
        
      
      <br/>
      <div className="d-flex justify-content-center">
      <button type="submit button" name="submit" className="col-6 btn btn-lg button-flip">Choose</button>
      </div>
      </form>
      </div>
      
      <br/>
      <div className="d-flex justify-content-center">
     <h4 id="result"></h4>
     </div>
     <br/>

    

 </div>
//conditionally render chosen restaurant

      
    );


    


}


export default UseMyList