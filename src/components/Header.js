import React from 'react';
import Button from './Button'

const Header = (props) => {
    // JSX(Javascript Syntax Extension) code return

    console.log(props)
    return (
        <header className="header">
            <h1>{props.title}</h1>
            <Button text={'hello'}/>
        </header>
    )
}
export  default Header