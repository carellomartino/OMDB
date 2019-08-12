import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home'
import MoviesContainer from '../containers/MoviesContainer';
import NavbarContainer from '../containers/NavbarContainer'
import SingleMovieContainer from '../containers/SingleMovieContainer'
import LoginContainer from '../containers/LoginContainer'




export default () => (
  <div id="root">
    <Route component={NavbarContainer} />
    <div>
    <Switch>
      <Route exact path='/' render={() => <Home />} />
      <Route exact path='/movies' render={() => <MoviesContainer />} />
      <Route path='/movies/:id' component={SingleMovieContainer} />
      <Route path='/login' component={LoginContainer} />      
    </Switch>
    </div>
  </div>
);


















// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import Navbar from './Navbar'
// import NavbarContainer from '../containers/NavbarContainer';


// class Main extends Component {
//   render() {
//     return (
//     <div>
//       <NavbarContainer />
//       <h1>Project Homeeeee Hola seba hola gaby</h1>
//       {/* Link to List.js */}
//       <Link to={'./list'}>
//         <button>
//             My List
//         </button>
//       </Link>
//     </div>
//     );
//   }
// }
// export default Main;