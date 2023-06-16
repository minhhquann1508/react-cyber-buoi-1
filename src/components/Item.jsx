import React, { Component } from 'react'
import ButtonLogo from './ButtonLogo';
export default class Item extends Component {
    render() {
        let { title, desc, icon } = this.props;
        return (
            <div className="col-4 py-5 item">
                <div className="item-logo">
                    <ButtonLogo icon={icon} />
                </div>
                <div className="card item-content bg-light" style={{ height: 200 }}>
                    <div className="card-body mt-5">
                        <h4 className="card-title text-center">{title}</h4>
                        <p className="card-text text-center">{desc}</p>
                    </div>
                </div>
            </div>
        )
    }
}
