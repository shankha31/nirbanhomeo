import React from "react";
import NavItem from './NavItem';
import { navItemData } from './navItemData';

const NavBar = () => {
    return (
        <>
        <div className="structureNavParent">
            <div className="structureNav">
                <span className="navName">Nirban-Hanny</span>
                <div className="structureNavPage">
                    <ul>

                        {navItemData.map((navItem) => {
                            return (
                                <>
                                    <NavItem
                                        className="NavItem"
                                        ItemName={navItem.ItemName}
                                        link={navItem.link}
                                        subItems={navItem.subItems}
                                    />

                                </>


                            )
                        })}
                    </ul>

                </div>
            </div>
        </div>
        </>
    );
}

export default NavBar;