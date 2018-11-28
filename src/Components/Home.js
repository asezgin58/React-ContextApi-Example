import React, {Component, Fragment} from 'react';

import MyContext from '../Context/context';

class Home extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: ""
        }
    }

    handleChange(obj) {

        this.setState({
            name: obj.target.value
        })
    }

    render() {
        // console.log(this.state)
        return (
            <MyContext.Consumer>
                {(context) => (
                    <Fragment>
                        <div className="col-md-12 order-md-1 text-center">
                            <h3 className="mb-3">Name Form</h3>

                            <div className="row justify-content-center">
                                <div className="col-md-8 mb-3 text-center">
                                    <label htmlFor="name">Enter Name</label>
                                    <input type="text" className="form-control" id="nameText" placeholder=""
                                           required="" onChange={(e) => this.handleChange(e)}/>
                                    <div className="invalid-feedback">
                                        Valid name is required.
                                    </div>
                                </div>

                            </div>

                            <hr className="mb-4"/>

                            <button className="btn btn-primary btn-lg btn-block" onClick={()=>context.addNewRecordForList(this.state.name)}>Save</button>

                        </div>
                    </Fragment>
                )}
            </MyContext.Consumer>

        );
    }
}

export default Home;