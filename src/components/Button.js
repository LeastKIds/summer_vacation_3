import React from 'react';

const Button = ({text}) => {
    return (
        <button style={{backgroundColor: 'green'}} className={'btn'}>{text}</button>
    )
}

export default Button