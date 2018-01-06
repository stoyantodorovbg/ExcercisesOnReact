import React, { Component } from 'react'
import Header from './Header.js'
import Footer from './Footer.js'
import Clock from './Clock.js'
import Cars from './Cars.js'

class HomePage extends Component {

    render() {
        return(
            <div>
                <Header menuItem = 'profile'></Header>
                <h1>
                    Hi from HOME PAGE :)
                </h1>
                <Cars/>
                <Clock/>
                <Footer/>
            </div>
        )
    }
}

export default HomePage