import React, {Component, Fragment} from 'react';

import MyContext from '../Context/context';

class Search extends Component {



    renderList(paramList) {

        return paramList.map((item, i) => {
            return (
                <li key={i} className="p-2 border-bottom">{item.name}</li>
            )
        })
    }

    render() {

        return (
            <MyContext.Consumer>
                {(context) => (
                    <Fragment>
                        <div>
                            <div className="form-inline mt-2 mt-md-0 d-flex flex-column position-relative">
                                <input id="searchList" className="form-control mr-sm-2 w-100" type="text"
                                       placeholder="Search"
                                       aria-label="Search" onChange={(e) => context.filterListForSearch(e.target.value)}
                                       autoComplete="off"/>

                                <ul id="list" className="position-absolute bg-light w-100 list-unstyled pre-scrollable"
                                    style={{top: 37, left: 0, borderRadius: '5px', maxHeight: '30% !important'}}>
                                    {this.renderList(context.state.searchList)}
                                </ul>


                            </div>
                        </div>


                    </Fragment>
                )}
            </MyContext.Consumer>


        );
    }
}

export default Search;