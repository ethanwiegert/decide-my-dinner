import React from 'react';
import './App.css';
import { useHistory } from "react-router-dom";
import { motion } from "framer-motion"


function Header(){
    const history=useHistory()

    return(

    
    <div className="pb-2">
    
    <div className="bg-dark bg-gradient text-white p-4">
    
 
    <div className="d-flex justify-content-center">
    
    {history.length<2 ?
    <motion.div
          initial={{opacity:0, y:-100}}
          animate={{opacity:1, y:0}}
          transition={{duration:2}}
         >
    <h1>Decide Dinner</h1>
    </motion.div> :
    <h1>Decide Dinner</h1>}

    </div>


    <div className="d-flex justify-content-center">
    {history.length<2 ?
    <motion.div
          initial={{opacity:0, y:-100}}
          animate={{opacity:1, y:0}}
          transition={{duration:2}}
         >
    <h5 className="fst-italic">Let Us Decide For You</h5>
    </motion.div> :
    <h5 className="fst-italic">Let Us Decide For You</h5>
    }
    </div>
    
    </div>

<div className="row">
<nav className="navbar navbar-expand navbar-light bg-light">
  <div className="container-fluid d-flex justify-content-center">
    <a className="navbar-brand" href="/">
      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-house-fill" viewBox="0 0 16 16">
        <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293z"/>
        <path d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293z"/>
      </svg>
    </a>
    </div>

      <div className="container-fluid d-flex justify-content-center">
          <a className="nav-link active" aria-current="page" href="/pick-popular">Pick Popular</a>
        </div>
        <div className="container-fluid d-flex justify-content-center">
          <a className="nav-link active" href="/use-my-list">Use My List</a>
        </div>
        <div className="container-fluid d-flex justify-content-center">
          <a className="nav-link active" href="/find-my-dinner">Find My Dinner</a>
        </div>
      
    
 
</nav>
</div>


    
    </div>
        

  
  )
}

export default Header