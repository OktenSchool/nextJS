import React from 'react';
import Link from "next/link";

const MenuComponent = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link href={'/users'}>users</Link>
                </li>
                <li>
                    <Link href={'/comments'}>comments</Link>
                </li>
            </ul>
        </div>
    );
};

export default MenuComponent;
