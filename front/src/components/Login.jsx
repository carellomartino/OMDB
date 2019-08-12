import React from 'react';
import { Link } from 'react-router-dom';


export default (props) => (
    <div className='row' >
        <div>LOGIN PAGE</div>
        <div>

        <form className="form-inline my-2 my-lg-0" onSubmit={props.handleSub}>
            <input className="form-control mr-sm-2" type="username" placeholder="USERNAME" aria-label="Search" name='input'  />
            <input className="form-control mr-sm-2" type="password" placeholder="PASSWORD" aria-label="Search" name='input'  />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>

        </div>
    </div>

)