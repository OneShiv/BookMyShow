import React from "react";
import {tabs} from "./Tabs.module.css";
import {BrowserRouter as Router,NavLink, Route, Redirect} from "react-router-dom";
import Bookmyshow from "./Bookmyshow";
const Tabs = () =>{
  return (
    <Router>
      <div>
        <ul className={tabs}>
          <li>
            <NavLink to="/show/1">Show 1</NavLink>
          </li>
          <li>
            <NavLink to="/show/2">Show 2</NavLink>
          </li>
          <li>
            <NavLink to="/show/3">Show 3</NavLink>
          </li>
        </ul>
        <hr />
        <Route exact path="/" render={()=>
(<Redirect to="/show/1"/>)} 
          />
        <Route path="/show/:id" component={Bookmyshow}/>
      </div>
    </Router>
  )
}

export default Tabs;
