import React, { Component } from 'react'

export default class ButtonLogo extends Component {
    render() {
        return (
            <button className='btn btn-primary item-btn'>
                <i className={this.props.icon}></i>
            </button>
        )
    }
}
