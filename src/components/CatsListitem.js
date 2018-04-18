import React from 'react';

const CatsListLitem = ({cat}) => {

    const span = Math.floor(Math.random()*10) > 5 ? '--large' : '--medium';

    return <img className={`cat__item cat${span}`} src={cat.url._text} />;
};
    

export default CatsListLitem;