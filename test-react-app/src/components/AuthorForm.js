import React, { Component } from 'react'
import Input from './common/Input.js'

class AuthorForm extends Component {


    render() {
        return (
            <form>
                <Input
                    name='firstName'
                    placeholder='First name'
                    value={this.props.author.firstName}
                    error={this.props.errors.firstName}
                    onChange = {this.props.onChange}
                />
                <br/>
                <Input
                    name='lastName'
                    placeholder='Last name'
                    value={this.props.author.lastName}
                    error={this.props.errors.lastName}
                    onChange = {this.props.onChange}
                />
                <br/>
                <input
                    type='submit'
                    value='Add Author'
                    onClick={this.props.onSave}
                />
            </form>
        )
    }
}

export default AuthorForm