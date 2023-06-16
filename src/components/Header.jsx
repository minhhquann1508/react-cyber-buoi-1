import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <div className="container py-1">
                <nav className="navbar navbar-expand-sm navbar-light">
                    <a className="navbar-brand text-white nav-logo" href="#">Start Bootstrap</a>
                    <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="collapsibleNavId">
                        <ul className="navbar-nav ml-auto ">
                            <li className="nav-item">
                                <a className="nav-link active" href="#">Home </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#">Contact</a>
                            </li>
                        </ul>
                    </div>
                </nav>

            </div>
        )
    }
}
