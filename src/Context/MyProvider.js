import React, {Component} from 'react';
import MyContext from './context';

class MyProvider extends Component {
    state = {
        name: '',
        list: [],
        searchList: []
    }

    addNewRecordForList = (val) => {
        // console.log('val : ' + val);
        const {list} = this.state;

        let newList = list;

        newList.push({
            name: val,
        });

        document.getElementById("nameText").value = "";
        document.getElementById("nameText").focus();

        this.setState({
            list: newList,
            name: ""
        })
    }

    filterListForSearch = (val) => {

        // console.log(val);

        const {list} = this.state;

        if (val.length > 0) {
            let newList = list.filter(f => f.name.toUpperCase().includes(val.toUpperCase()));

            this.setState({
                searchList: newList
            })
        } else {
            this.setState({
                searchList: []
            })
        }

    }

    render() {

        // console.log(this.state.list)
        return (
            <MyContext.Provider value={{
                state: this.state,
                addNewRecordForList: this.addNewRecordForList,
                filterListForSearch: this.filterListForSearch
            }}>
                {this.props.children}
            </MyContext.Provider>
        )
    }
}

export default MyProvider;