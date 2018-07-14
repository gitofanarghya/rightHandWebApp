import React, { Component, Fragment } from 'react';
import NavBarMenu from './NavBar-Menu';



class Home extends Component {
    render() {
        return (
            <Fragment>
                <NavBarMenu /*accessToken={this.props.accessToken}*//>
            </Fragment>
        )
    }
}

export default Home;