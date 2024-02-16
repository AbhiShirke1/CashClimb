export function createUser(userData) {
    return new Promise(async (resolve) => {
        const response = await fetch('http://localhost:8000/api/user/register', {
            method: 'POST',
            body: JSON.stringify(userData),
            headers: { 'content-type': 'application/json' }
        });
        const data = await response.json();
        resolve({ data });
    }
    );
}
export function checkUser(loginInfo) {
    return new Promise(async (resolve) => {
        const response = await fetch('http://localhost:8000/api/user/login', {
            method: 'POST',
            body: JSON.stringify(loginInfo),
            headers: { 'content-type': 'application/json' }
        });
        const data = await response.json();
        console.log(data)
        localStorage.setItem("user", JSON.stringify(data));

        resolve({ data });
    }
    );
}

export function updateUser(update) {
    return new Promise(async (resolve) => {
        const response = await fetch('http://localhost:8000/api/user/profile', {
            method: 'PUT',
            body: JSON.stringify(update),
            headers: {
                'content-type': 'application/json', 'Authorization': `Bearer ${JSON.parse(localStorage.getItem('user')).token}`,
            }
        });
        const data = await response.json();
        localStorage.setItem("user", JSON.stringify(data));

        resolve({ data });
    }
    );
}

// export function checkUser(loginInfo) {
//     return new Promise(async (resolve, reject) => {
//         const email = loginInfo.email;
//         const password = loginInfo.password;
//         const response = await fetch('http://localhost:8000/api/user/login');
//         const data = await response.json();
//         if (data.length) {
//             if (password == data[0].password) {
//                 resolve({ data: data });
//             }
//             else {
//                 reject({ message: 'Wrong credentials' });
//             }
//         }
//         else {
//             reject({ message: "Not registered" })
//         }
//     }
//     );
// }

