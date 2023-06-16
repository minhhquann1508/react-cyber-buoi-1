import React, { Component } from 'react'
import Header from './Header';
import Body from './Body';
import Footer from './Footer';
export default class BaiTapThucHanhLayout extends Component {
    render() {
        return (
            <>
                <header>
                    <Header />
                </header>
                <Body />
                <footer>
                    <Footer />
                </footer>
            </>
        )
    }
}
