const allUsers = [
    {
        id: 100,
        name: "Qasim Salam"
    },
    {
        id: 101,
        name: "Neelam Anwar"
    },
    {
        id: 102,
        name: "Saad Javaid"
    },
    {
        id: 103,
        name: "Talha Masood"
    },
    {
        id: 104,
        name: "Ali Bilal"
    },
    {
        id: 105,
        name: "Zain"
    },
    {
        id: 106,
        name: "Talal Ali"
    },
    {
        id: 107,
        name: "Bilal Zain"
    },
    {
        id: 108,
        name: "Mueez Ali"
    },
];

const linked = [
    {
        id: 106,
        name: "Talal Ali"
    },
    {
        id: 108,
        name: "Mueez Ali"
    },
]

const unlinkedUsers = (users, linkedUsers) => {
    const unlinkedUser = users.filter((user) => {
        // let exist = true;
        for (i = 0; i < linkedUsers.length; i++) {
            // (linkedUsers[i].id === user.id) ? false : true;
            return (user.id !== linkedUsers[i].id)
        }

    })
    return unlinkedUser
}

console.log(unlinkedUsers(allUsers, linked))