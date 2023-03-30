import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const NavItem = ({ ItemName, link, subItems }) => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <li className="NavItemStruct"
                onMouseEnter={() => setOpen(true)}
                onMouseLeave={() => setOpen(false)}
            >
                <NavLink to={link} className="NavItemLink"> {ItemName} </NavLink>
                {!subItems.length ? '' : (
                    open && (<ul className="subList">
                        {subItems.map((currItem) => {
                            return <li className="subListItem">{currItem}</li>
                        })}
                    </ul>)
                )}
            </li>
        </>
    );
}

export default NavItem;