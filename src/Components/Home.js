import {Component} from "react";
import React from "react";
import  MyContext from '../Context/context';
import {withRouter} from 'react-router';

class Home extends Component {

    constructor(props) {
        super(props);

        this.state={
            name:""
        }
    }


    navigateToPage = (val) => {
        this.props.history.push('/' + val.target.name);
    }

    handleChange(obj) {

        this.setState({
            name: obj.target.value
        })
    }

    render() {
        console.log(this.state)
        return (
            <div className="home">
                <MyContext.Consumer>
                    {(context) => (
                        <React.Fragment>
                            <h3>Home Page</h3>
                            <hr/>
                            <input type="text" name="name" value={this.state.name} onChange={(e) => this.handleChange(e)}/>
                            <button onClick={()=>context.growAYearOlder(this.state.name)}>Add</button>
                            <div style={{margin: '2%'}}>
                                <button name="list" onClick={(e) => this.navigateToPage(e)}>Go to List Page</button>

                            </div>
                        </React.Fragment>
                    )}
                </MyContext.Consumer>
            </div>
        )
    }
}

export default withRouter(Home);