import React from 'react';
import Movies from '../components/Movies'
import { connect } from 'react-redux'
import { fetchMovie } from '../store/actions/movie'
//import store from '../store/index'




class MoviesContainer extends React.Component {
    constructor(props) {
        super(props)

     
    }

    render() {
        console.log("MOVIESMOVIESMOVIES", this.props)
        return (
            <div>
                <Movies movies={this.props} handleClick={this.handleClick}/>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        pelis: state.movie
    }
}

const mapDispatchtoProps = (dispatch, ownProps) => ({
    fetchMovies: (name) => dispatch(fetchMovies(name)),
    fetchMovie: (name) => dispatch(fetchMovie(name))
})

export default connect(mapStateToProps, mapDispatchtoProps)(MoviesContainer)
