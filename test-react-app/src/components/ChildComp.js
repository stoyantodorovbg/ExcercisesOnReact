import React, { Component } from 'react'

class ChildComp extends Component {
    render () {
        return (
            <div>
                <h2 onClick={this.props.headerClicked}>Click here again!</h2>
                <input type='text' name='someInput' onChange={this.props.inputChanged.bind(this)}/>
            </div>
        )
    }

}

export default ChildComp

