import React from "react";
import {useState} from "react"
import {useHistory} from "react-router-dom"
import Header from "./Header";
import Footer from "./Footer";


function UseMyList(){
    const history=useHistory()
    
    

    const [name, setName] = useState('');
    const [list, setList] = useState([]);
    const [restaurant, setRestaurant]=useState("")
    const [display, setDisplay]=useState(false)

    

  

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
      }
      


   

      const submitHandler = (event) => {
        event.preventDefault();
        if(list.length<2){setRestaurant("")}
        if(list.length>=2 && display){
      
        let count=list.length
        const picked=getRandomInt(count)
        setRestaurant(`Your choice is: ${list[picked].name}`)
      }

    }


  
    return (
        
      <div>
       
    <Header/>
    
    
    <div className="d-flex justify-content-center p-4">
        <h2>Add Restaurants</h2>
    </div>

    <div className="d-flex justify-content-center pt-1">
        <h6>Any list changes will reset your choice.</h6>
    </div>


        <div className="d-flex justify-content-center">
        
        <form onSubmit={submitHandler}>
        <div className="mt-2 mb-3">
        <input className="m-2 p-2"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <button className="btn btn-success p-2 m-2" onClick={() => {
            
          setList([
            ...list,
            { name: name }
          ]);
          setName("");
          setRestaurant("");
        }}>Add</button>
        </div>
        
       
        {list.length===0 ? null :(<h3>Your List:</h3>)}
        
            
        {list.map(item => (
            
            <div className="row d-flex justify-content-center">
        <div className="col-6">
          <p>
            {item.name}{' '}
          </p>
          </div>
          <div className="col-6 pb-3">
          <button className="btn btn-danger" onClick={() => {
              setList(
                list.filter(a =>
                  a.name !== item.name
                )
              );
              setRestaurant("")
            }}>
              Delete
            </button>
           
            </div>
          </div>
           
        ))}
        
      
      <br/>
      <div className="d-flex justify-content-center">
      {list.length>=2 ? (<button type="submit button" name="submit" onClick={()=>setDisplay(true)} className="col-6 btn btn button-flip">Choose</button>) :null}
      </div>
      
      </form>
      </div>
      
      <br/>
      <div className="d-flex justify-content-center">
     <h4 id="result">{restaurant}</h4>
     </div>
     <br/>
    <div className="mt-5 pt-5">
    <Footer/>
    </div>

 </div>
//conditionally render chosen restaurant

      
    );


    


}


export default UseMyList