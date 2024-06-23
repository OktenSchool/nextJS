const base: string = 'https://jsonplaceholder.typicode.com';

const urlBuilder = {
    userBaseUrl: '/users',
    allUsers: () => base + urlBuilder.userBaseUrl,
    singleUsers: (id: string | number) => base + urlBuilder.userBaseUrl + '/' + id,

}

const userService = {
    getAllUsers: async (): Promise<IUser[]> => {
        let users = await fetch(urlBuilder.allUsers())
            .then(value => value.json());
        return users;
    },
    getUserById: async (id: string | number): Promise<IUser | null> => {
        let user: IUser = await fetch(urlBuilder.singleUsers(id))
            .then(value => value.json());
        return user;


    }
}

export {
    userService
}

