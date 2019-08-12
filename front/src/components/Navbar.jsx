import React from 'react';
import { Link } from 'react-router-dom';





export default (props) => (
<nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor: "#899D78"}} >
  <Link to={"/"} >
  <a className="navbar-brand" style={{color: "#90BAAD"}}>Welcome to OMDB App</a>
  </Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
 
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      
      <li className="nav-item">
        <a className="nav-link" href="/login">Link</a>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="#">Action</a>
          <a className="dropdown-item" href="#">Another action</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
      <li className="nav-item">
        <a className="nav-link disabled" href="#">Disabled</a>
      </li>
    </ul>
    <form className="form-inline my-2 my-lg-0" onSubmit={props.handleSub}>
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" name='input' onChange={(e)=>props.handleSearch(e)}/>
      <button className="btn btn-outline-success my-2 my-sm-0" style={{backgroundColor: "#8AA2A9", color: "white"}} type="submit">Search</button>
    </form>
  </div>
</nav>

);