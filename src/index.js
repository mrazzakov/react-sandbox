import React from "react";
import ReactDOM from "react-dom";


function MyInfo() {
    return (
        <div>
            <h1>Mike Razzakov</h1>
            <p>This is my first attempt with practicing with ReAct and these are my top 3 vacation spots</p>
            <ol>
                <li>Dominican Republic</li>
                <li>Mexico</li>
                <li>Disney, FL</li>
            </ol>
        </div>
    );
}

ReactDOM.render(<MyInfo/>,document.getElementById('root'));




// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';


// ReactDOM.render(<App />, document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
