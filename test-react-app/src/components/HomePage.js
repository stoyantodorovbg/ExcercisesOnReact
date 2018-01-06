import React, { Component } from 'react'
import ChildComp from './ChildComp.js'

class HomePage extends Component {
    constructor(props) {
        super(props)

        this.redirectToAbout = this.redirectToAbout.bind(this)
        this.headerClicked = this.headerClicked.bind(this)
    }

    redirectToAbout() {
        this.props.history.push('/about')
    }

    headerClicked(event) {
        window.alert('Clicked!')
        console.log(event)
        console.log(event.target)
    }

    inputChanged(event) {
        const target = event.target
        let field = target.name
        let value = target.value
        console.log(`${field} ${value}`)
    }

    render() {
        return(
            <div>
                <h1>Hi from HOME PAGE :)</h1>
                <h2 onClick={this.headerClicked}>Click here, brother!</h2>
                <input type='text' name='someInput' onChange={this.inputChanged.bind(this)}/>
                <ChildComp
                    headerClicked={this.headerClicked.bind(this)}
                    inputChanged={this.inputChanged.bind(this)}
                />
                <div>
                    <button onClick={this.redirectToAbout}>Go to about</button>
                </div>
            </div>
        )
    }
}

export default HomePage