import React, { Component } from 'react';
import { Link } from 'react-router-dom';



class Home extends Component {
  render() {
    return (
    <div>
      <h1>HOME: BIENVENIDO A OMDB hola muchachs</h1>
      {/* Link to List.js */}
      <Link to={'./list'}>
        <button>
            My List
        </button>
      </Link>
    </div>
    );
  }
}
export default Home;