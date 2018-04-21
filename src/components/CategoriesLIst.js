import React, {Component} from 'react';
import {connect} from 'react-redux';
import Category from './Category';
import {get} from '../actions/catsAction';

const CATEGORIES = ['random', 'hats', 'space', 'funny', 'sunglasses', 'boxes', 'caturday', 'ties', 'dream', 'sinks', 'clothes'];


class CategoriesList extends Component{
    constructor(props){
        super(props);

        this.state = {
            active: 'random'
        }
    }

    changeCategory = (e) => {
        let url = 'http://thecatapi.com/api/images/get?format=xml&results_per_page=20';
        let category = e.target.innerText.toLowerCase();
        this.activeCategory(category);
        if(category === 'random'){
            this.props.get();
        }else {
            this.props.get(`${url}&category=${category}`);
        }
    }

    activeCategory = (category) => {
        this.setState({
            active: category
        });
    }

    render () {
        const categories = CATEGORIES.map((item, index) => {
            return <Category active={item === this.state.active? item : null} change={this.changeCategory} key = {index} category={item} />;
        });
        return (
            <div className='category__list'>
                {categories}
            </div>
        );
    }
}

export default connect(null, {get})(CategoriesList);