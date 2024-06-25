import React from 'react';
import Link from "next/link";
import NavLinkClientComponent from "@/components/nav-link-client-component/NavLinkClientComponent";


const MenuComponent = () => {

    return (
        <div>

            <ul>
                <li>

                    <NavLinkClientComponent path={'/'}>home</NavLinkClientComponent>
                </li>
                <li>
                    <NavLinkClientComponent path={'/users'}>users</NavLinkClientComponent>
                </li>
                <li>
                    <NavLinkClientComponent path={'/comments'}>comments</NavLinkClientComponent>
                </li>
                <li>
                    <NavLinkClientComponent path={'/meals'}>meals</NavLinkClientComponent>
                </li>
            </ul>
        </div>
    );
};

export default MenuComponent;
