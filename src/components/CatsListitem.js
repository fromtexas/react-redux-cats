import React from 'react';
import {Link} from 'react-router-dom';

const CatsListLitem = ({cat}) => {

    const classArr = ['--small', '--medium', '--large']

    const span = Math.floor(Math.random()*3);

    return <Link className = {`cat${classArr[span]}`} to={`/${cat.id._text}`}><img className={`cat__item`} src={cat.url._text} /></Link>;
};
    

export default CatsListLitem;