import React, { Component } from 'react'

export default class Button extends Component {
    render() {

        return (
            <button className='btn btn-primary banner-btn'>
                {this.props.text}
            </button>
        )
    }
}
