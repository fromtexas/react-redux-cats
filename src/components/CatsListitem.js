import React from 'react';
import {Link} from 'react-router-dom';

const CatsListLitem = ({cat}) => {

    const span = Math.floor(Math.random()*10) >= 5 ? '--large' : '--medium';

    return <Link className = {`cat${span}`} to={`/${cat.id._text}`}><img className={`cat__item`} src={cat.url._text} /></Link>;
};
    

export default CatsListLitem;