import React from 'react';
import {Metadata} from "next";
import {userService} from "@/services/api.service";

// export const metadata: Metadata = {
//     title: 'UserLayout metadata'
// }

export const generateMetadata = async ({params}: { params: { id: string } }): Promise<Metadata> => {
    console.log(params.id, '!!!!');
    let user = await userService.getUserById(params.id);
    return {title: user?.username}
}
type Props = { children: React.ReactNode }
const UserLayout = ({children}: Props) => {
    return (
        <div>
            {children}
        </div>
    );
};

export default UserLayout;
