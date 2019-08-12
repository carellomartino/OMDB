import React from 'react';
import SingleMovie from '../components/SingleMovie'
import { connect } from 'react-redux'
import { fetchMovie } from '../store/actions/movie'
//import store from '../store/index'


class SingleMovieContainer extends React.Component {
    constructor(props) {
        super(props);
        // this.state = Object.assign({}, store.getState());
    }

    componentDidMount() {
        this.props.fetchMovie(this.props.movieId)
    }

    render() {
        return (
            <SingleMovie movie={this.props} />
            )
            
        }
    }
    
    const mapStateToProps = (state, ownProps) => {
        
        console.log("ESTO ES OWNPROPS", ownProps)
    return {
        peli: state.movie, //el state del store
        movieId: ownProps.match.params.id //del propio singlemovie
    }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    fetchMovie: (name) => dispatch(fetchMovie(name))
})

export default connect(mapStateToProps, mapDispatchToProps)(SingleMovieContainer)




