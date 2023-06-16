import React, { Component } from 'react'
import Item from './Item';
export default class ListItem extends Component {
    render() {
        let listTitle = ["Fresh new layout", "Free to download", "Jumbotron hero header",
            "Feature boxes", "Simple clean code", "A name you trust"]
        let listDesc = ["With Bootstrap 5, we've created a fresh new layout for this template!", "As always, Start Bootstrap has a powerful collectin of free templates.",
            "The heroic part of this template is the jumbotron hero header!", "We've created some custom feature boxes using Bootstrap icons!",
            "We keep our dependencies up to date and squash bugs as they come!", "Start Bootstrap has been the leader in free Bootstrap templates since 2013!"]
        let listIcon = ["fa-solid fa-file", "fa-solid fa-download",
            "fa-solid fa-credit-card", "fa-brands fa-bootstrap",
            "fa-solid fa-code", "fa-solid fa-check"]
        return (
            <div className="container my-5">
                <div className='row'>
                    <Item title={listTitle[0]} desc={listDesc[0]} icon={listIcon[0]} />
                    <Item title={listTitle[1]} desc={listDesc[1]} icon={listIcon[1]} />
                    <Item title={listTitle[2]} desc={listDesc[2]} icon={listIcon[2]} />
                    <Item title={listTitle[3]} desc={listDesc[3]} icon={listIcon[3]} />
                    <Item title={listTitle[4]} desc={listDesc[4]} icon={listIcon[4]} />
                    <Item title={listTitle[5]} desc={listDesc[5]} icon={listIcon[5]} />
                </div>
            </div>
        )
    }
}
