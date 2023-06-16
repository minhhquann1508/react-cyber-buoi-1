import React, { Component } from 'react'
import Button from './Button'
export default class Banner extends Component {
    render() {
        return (
            <div className='text-center py-5 px-5 bg-light my-5'>
                <h1 className='my-3 banner-title'>A warm welcome!</h1>
                <p className='my-3 banner-desc'>
                    Bootstrap utility classes are used to create this jumbotron since the old component has been removed from the framework. Why create custom CSS when you can use utilities?
                </p>
                <Button text={"Call to action"} />
            </div>
        )
    }
}
