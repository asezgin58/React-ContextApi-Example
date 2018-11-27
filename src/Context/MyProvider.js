import React, {Component} from 'react';
import MyContext from './context';

class MyProvider extends Component {
    state = {
        name: '',
        list: []
    }

    addNewRecordForList=(val)=>{
        // console.log('val : ' + val);
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

    render() {

        // console.log(this.state.list)
        return (
            <MyContext.Provider value={{
                state: this.state,
                addNewRecordForList: this.addNewRecordForList
            }}>
                {this.props.children}
            </MyContext.Provider>
        )
    }
}

export default MyProvider;