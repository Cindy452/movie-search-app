import React, {Component} from 'react';
import SearchMovies from './SearchMovies';

// console.log(process.env.REACT_APP_API_KEY)

export class App extends Component{
    render() {
        return (
            <div className="container">
                <h1 className="title">React Movie Search</h1>
                <SearchMovies />
            </div>
        )
    }
}