import React, {Component} from 'react';
import {getCat} from '../utils/getCats';
import {connect} from 'react-redux';

class CatImg extends Component {
    constructor(props){
        super(props);
    }

    render () {
        const currentCat = getCat(this.props.cats, this.props.match.params.id);
        return (
            <div>
                <img src = {currentCat.url._text}/>
            </div>
        );
    }
}

const mapStateToProps = ({cats}) => ({
    cats
});

export default connect(mapStateToProps)(CatImg);