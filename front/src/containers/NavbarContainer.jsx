import React from 'react';
import store from '../store';
import { connect } from 'react-redux';
import Navbar from '../components/Navbar';
import { fetchMovies } from '../store/actions/movies';

class NavbarContainer extends React.Component {
    constructor(props) {
        super(props);
        //this.state = store.getState();
        this.state = {
            movies: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleInput = this.handleInput.bind(this)
    }

    handleInput(e) {
        // console.log("e en handle input", e.target.value)
        var input = e.target.value
        this.setState({ movies: input })
        // console.log(input)
    }

    handleSubmit(e) {
        e.preventDefault();
        // console.log("HANDLESUBMIT", this.state.movies)
        if (this.state.movies) {
            this.props.fetchMovies(this.state.movies)
            this.props.history.push('/movies')
        }
    }

    render() {
        // console.log("!!!!!!!!!!!!!!!!!", store.getState())
        return (
            <Navbar handleSearch={this.handleInput} handleSub={this.handleSubmit} />
        );
    }
}


const mapStateToProps = (state, ownProps) => {
    return {
        pelis: state.movies
    }
}

const mapDispatchtoProps = (dispatch, ownProps) => ({
    fetchMovies: (name) => dispatch(fetchMovies(name))
})


export default connect(mapStateToProps, mapDispatchtoProps)(NavbarContainer)





// mapDispatchtoP
// dispatch(fetchMovies(batman))