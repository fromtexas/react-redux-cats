import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

const Category = ({category, change, active}) => (
    <NavLink exact to = '/' onClick = {change} className = {`category__item ${active? 'category__active' : ''}`}>{category}</NavLink>
);

export default Category;