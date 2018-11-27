import React, {Component, Fragment} from 'react';

import MyContext from '../Context/context';

class List extends Component {

    navigateToPage = () => {
        this.props.history.push('/');
    }

    renderList(paramList) {

        return paramList.map((item, i) => {
            return  <tr key={i}>
                <th scope="row">{i+1}</th>
                <td>{item.name}</td>
            </tr>

        })
    }

    render() {

        return (
            <MyContext.Consumer>
                {(context)=>(
                    <Fragment>

                        <div className="col-md-12 order-md-1 text-center">
                            <h3 className="mb-3">Name List</h3>
                            <table className="table table-striped">
                                <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Name</th>

                                </tr>
                                </thead>
                                <tbody>

                                {this.renderList(context.state.list)}

                                </tbody>
                            </table>
                            <hr className="mb-4"/>

                            <button className="btn btn-primary btn-lg btn-block" onClick={()=>this.navigateToPage()}>Go Home</button>

                        </div>
                    </Fragment>
                )}
            </MyContext.Consumer>

        );
    }
}

export default List;