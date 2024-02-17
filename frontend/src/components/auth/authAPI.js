export function createUser(userData) {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await fetch('http://localhost:8000/api/user/register', {
                method: 'POST',
                body: JSON.stringify(userData),
                headers: { 'Content-Type': 'application/json' }
            });
            const data = await response.json();
            resolve({ data });
        } catch (error) {
            reject({ error });
        }
    });
}

export function checkUser(loginInfo) {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await fetch('http://localhost:8000/api/user/login', {
                method: 'POST',
                body: JSON.stringify(loginInfo),
                headers: { 'Content-Type': 'application/json' }
            });
            const data = await response.json();

            if (response.ok) {
                localStorage.setItem("user", JSON.stringify(data));
                resolve({ data });
            } else {
                reject({ message: data.message || 'Login failed' });
            }
        } catch (error) {
            reject({ error });
        }
    });
}

export function updateUser(update) {
    return new Promise(async (resolve, reject) => {
        try {
            const token = JSON.parse(localStorage.getItem('user')).token;

            const response = await fetch('http://localhost:8000/api/user/profile', {
                method: 'PUT',
                body: JSON.stringify(update),
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                }
            });

            const data = await response.json();

            if (response.ok) {
                localStorage.setItem("user", JSON.stringify(data));
                resolve({ data });
            } else {
                reject({ message: data.message || 'Update failed' });
            }
        } catch (error) {
            reject({ error });
        }
    });
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

