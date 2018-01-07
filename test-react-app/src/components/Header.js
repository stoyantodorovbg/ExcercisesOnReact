import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Header extends Component {
    render() {
        let id = 3
        return(
            <div>
                <h1>
                    Header
                </h1>
                <h2>
                   Menu {this.props.MenuItem}
                </h2>
                <p>
                    <Link to='/home'>Home</Link>
                </p>
                <p>
                    <Link to='/about'>About</Link>
                </p>
                <p>
                    <Link to='/createAuthor'>Create Author</Link>
                </p>
                <p>
                    <Link to='/contact'>View a message</Link>
                </p>
                <p>
                    <Link to={'/page/with/' + id}>View link with param</Link>
                </p>
                <p><a href='https://softuni.bg'>SoftUni</a></p>
            </div>
        )
    }
}

export default Header
