import React, {Component} from 'react';
import CatsListItem from './CatsListitem';
import {connect} from 'react-redux';


const HomePage = ({cats}) => {
    return (
        <div className = 'cat__gallery'>
            {cats.map((item, index) => <CatsListItem key = {index} cat = {item} />)}
        </div>
    );
}  


const mapStateToProps = ({cats}) => ({
  cats
});

export default connect(mapStateToProps)(HomePage);