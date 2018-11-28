import React, {Component, Fragment} from 'react';

import MyContext from '../Context/context';

class Search extends Component {

    render() {
        return (
            <MyContext.Consumer>
                {(context)=>(
                    <Fragment>
                        <form className="form-inline mt-2 mt-md-0">
                            <input className="form-control mr-sm-2" type="text" placeholder="Search"
                                   aria-label="Search" onChange={(e) => context.filterListForSearch(e.target.value)}/>
                        </form>
                    </Fragment>
                )}
            </MyContext.Consumer>


        );
    }
}

export default Search;