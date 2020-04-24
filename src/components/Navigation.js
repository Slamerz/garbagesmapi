import React from "react";
import {NavLink} from "react-router-dom";

export function Navigation(props) {
    const {items, type} = props
    return (
        <>
            <ul>
                {items.map((item, index) => {
                    return (
                        <NavLink to={`${type}/${index}`}><li>{item}</li></NavLink>)}
                        )}
            </ul>
        </>

    )
}
