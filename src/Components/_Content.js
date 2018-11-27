import React, { Component, Fragment} from 'react';

import Home from './Home';
import List from './List';
import {Route} from "react-router-dom";

class _Content extends Component{

    render(){

        return(

            <Fragment>
                <main role="main" className="container">
                    <div className="jumbotron" style={{marginTop:'2%'}}>
                        <Route exact path="/" component={Home} />
                        <Route path="/list" component={List} />
                    </div>
                </main>

            </Fragment>
        );
    }
}

export default _Content;