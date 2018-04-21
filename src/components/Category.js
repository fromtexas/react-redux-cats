import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';


class Category extends Component {
    constructor(props) {
        super(props);
    }

    render () {
        return <NavLink exact to="/" onClick={this.props.change} className={`category__item ${this.props.active? 'category__active' : ''}`}>{this.props.category}</NavLink>;
    }
}
//should be stateless 
export default Category;