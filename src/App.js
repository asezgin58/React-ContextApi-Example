import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";

import Home from './Components/Home';
import MyContext from './Context/context';
import List from './Components/List';


class MyProvider extends Component {
    state = {
        name: '',
        list: []
    }

    render() {

        // console.log(this.state.list)
        return (
            <MyContext.Provider value={{
                state: this.state,
                growAYearOlder: (val) =>{

                    console.log('val : ' + val);
                    const {list} = this.state;

                    let newList = list;

                    newList.push({
                        name: val,
                    });

                    this.setState({
                        list: newList,
                        name: ""
                    })
                }
            }}>
                {this.props.children}
            </MyContext.Provider>
        )
    }
}

class App extends Component {
    render() {
        return (
            <MyProvider>
                <div>
                    <BrowserRouter>
                        <Switch>
                            {/*<Route exact path="/" component={Home}/>*/}
                            <Route path="/" exact><Home/></Route>
                            <Route path="/list"><List/></Route>
                            {/*<Route path="/list" component={List}/>*/}
                            />
                        </Switch>
                    </BrowserRouter>
                </div>
            </MyProvider>
        );
    }
}


export default App;
