import React from "react";
import './App.css';
import Home from './Pages/Home';
import Search from './Pages/Search';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

function App() {
    return (
        <Router>
            <div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/consulta">Consulta</Link>
                    </li>
                </ul>

                <hr />

                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/consulta">
                        <Search />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;