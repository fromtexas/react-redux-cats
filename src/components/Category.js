import React, {Component} from 'react';


class Category extends Component {
    constructor(props) {
        super(props);
    }

    change = (e) => {
        console.log(e.target.innerText);
    }

    render () {
        return <a onClick={this.change} className='category__item'>{this.props.category}</a>;
    }
}

export default Category;