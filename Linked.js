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
        return linkedUsers.filter((linkeduser)=>{
			return user.id === linkeduser.id
		}).length == 0
		  
		
    })
    return unlinkedUser
}

console.log(unlinkedUsers(allUsers, linked))