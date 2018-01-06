import React, { Component } from 'react'
import Header from './Header.js'
import Footer from './Footer.js'
import Clock from './Clock.js'
import Cars from './Cars.js'

class HomePage extends Component {
    constructor(props) {
        super(props)

        this.redirectToAbout = this.redirectToAbout.bind(this)
    }

    redirectToAbout() {
        this.props.history.push('/about')
    }

    render() {
        return(
            <div>
                <h1>
                    Hi from HOME PAGE :)
                </h1>
                <div>
                    <button onClick={this.redirectToAbout}>Go to about</button>
                </div>
            </div>
        )
    }
}

export default HomePage