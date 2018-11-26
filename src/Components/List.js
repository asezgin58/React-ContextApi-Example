import {Component} from "react";
import React from "react";
import {withRouter} from 'react-router';
import MyContext from "../Context/context";

class List extends Component {

    navigateToPage = (val) => {
        this.props.history.push('/' + val.target.name);
    }

    renderList(paramList) {

        return paramList.map((item, i) => {
            return <ul key={i}>
                <li><strong>Name :</strong><span>{item.name}</span></li>
                <hr/>
            </ul>

        })
    }

    render() {
        return (
            <div className="list">

                <MyContext.Consumer>
                    {(context) => (
                        <React.Fragment>
                            <h3>List Page</h3>
                            <hr/>

                            {this.renderList(context.state.list)}

                            <div style={{margin: '2%'}}>
                                <button name="" onClick={(e) => this.navigateToPage(e)}>Go to Home Page</button>

                            </div>
                        </React.Fragment>
                    )}
                </MyContext.Consumer>
            </div>
        )
    }
}
export default withRouter(List);