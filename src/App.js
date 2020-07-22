import React, { Component } from 'react';
import "./App.css"
import List from "./Components/List"

const App = () => {
    return (
        <div className="App">
            <h1 className="movie-list-title">the most amazing movie list</h1>
            <List />
        </div>
    )
}


export default App