import React, { Component, Fragment} from 'react';
import {Link} from "react-router-dom";

class _Menu extends Component{

    render(){

        return(

            <Fragment>
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">

                        <Link to="/" className="nav-link">Home <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/list" className="nav-link">List</Link>
                    </li>

                </ul>
            </Fragment>
        );
    }
}

export default _Menu;