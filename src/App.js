import React, {Component, Fragment} from 'react';

import _Header from './Components/_Header';

class App extends Component {

    closeSearch = (e) => {
        // console.log(e.target.id);

        if (e.target.id !== 'searchList') {
            // document.getElementById("searchList").value="";
            document.getElementById("list").style.display = "none";
        } else {
            document.getElementById("list").style.display = "block";
        }

    }

    closeUL = () => {
        document.getElementById("list").style.display = "none";
        document.getElementById("nameText").focus();
    }

    componentWillMount() {

        window.addEventListener('click', this.closeSearch)
        window.addEventListener('load', this.closeUL)

    }

    render() {
        return (
            <Fragment>
                <_Header/>

            </Fragment>
        );
    }
}

export default App;
