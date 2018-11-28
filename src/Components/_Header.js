import {Component, Fragment} from "react";
import React from "react";
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import _Menu from './_Menu';
import _Content from './_Content';
import Search from './Search';

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
                                {/*Search*/}
                                <Search/>
                                {/*Search*/}
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
