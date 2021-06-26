import React, { Component } from "react";
import 'assets/scss/style.scss'

import $ from 'jquery'

class MenuMobile extends Component {
    state = { clicked: false }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
        this.handleToggle()
    }

    handleToggle = () => {
        $(".collapse").toggleClass("show")
    }

    render() {
        return(
            <div className="menu-icon" onClick={this.handleClick}>
                <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
            </div>
        )
    }
}

export default MenuMobile;