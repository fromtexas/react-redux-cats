import React from 'react';
import CatsListItem from './CatsListitem';

const HomePage = ({cats}) => {
    return (
        <div className = 'cat__gallery'>
            {cats.map((item, index) => <CatsListItem key = {index} cat = {item} />)}
        </div>
    );
}  

export default HomePage;