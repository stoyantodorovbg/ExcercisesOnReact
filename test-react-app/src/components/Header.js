import React, { Component } from 'react'

class Header extends Component {
    render() {
        return(
            <div>
                <h1>
                    Header
                </h1>
                <h2>
                   Menu {this.props.MenuItem}
                </h2>
                <p>
                    <a href='/home'>Home</a>
                </p>
                <p>
                    <a href='/about'>About</a>
                </p>
            </div>
        )
    }
}

export default Header
