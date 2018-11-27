import {Component, Fragment} from "react";
import React from "react";
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import _Menu from './_Menu';
import _Content from './_Content';

class _Header extends Component {
    render() {
        return (
            <Router>
                <Fragment>

                    <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                        <div className="container">
                            <a className="navbar-brand" href="#">Context Api</a>
                            <button className="navbar-toggler" type="button" data-toggle="collapse"
                                    data-target="#navbarCollapse"
                                    aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarCollapse">
                                {/*MENU*/}
                                <_Menu/>
                                {/*MENU*/}
                                <form className="form-inline mt-2 mt-md-0">
                                    <input className="form-control mr-sm-2" type="text" placeholder="Search"
                                           aria-label="Search"/>
                                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search
                                    </button>
                                </form>
                            </div>

                        </div>

                    </nav>
                    {/*CONTENT*/}
                    <_Content/>
                    {/*CONTENT*/}

                </Fragment>
            </Router>
        );
    }
}

export default _Header;
