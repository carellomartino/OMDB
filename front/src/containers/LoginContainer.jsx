import React from 'react';
import Login from '../components/Login'
import { connect } from 'react-redux'



class LoginContainer extends React.Component {
    constructor(props) {
        super(props)

     
    }

    render() {
        console.log("MOVIESMOVIESMOVIES", this.props)
        return (
            <div>
                <Login />
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

export default connect(mapStateToProps, mapDispatchtoProps)(LoginContainer)
