export function createUser(userData) {
    // const userObj = {
    //     "founder": "true",
    //     "email": "santosh@g.com",
    //     "password": "Santosh123@",
    //     "full_name": "Santosh",
    //     "company": "Arrow",
    //     "cin": "2424817738726dgds",
    //     "location": "Mumbai",
    //     "website": "www.arrow.com",
    //     "established_year": "2019",
    //     "founders": [{"name": "Siddharth Yadav", "designation": "ceo"}, {"name": "Abhishek Shirke", "designation": "coo"}],
    //     "description": "This is a company",
    //     "domain": ["IT", "Tech"],
    //     "valuation": "20 cr",
    //     "funding": [{
    //           "funding_stage": 
    //               "Series A",
    //           "amount_raised":
    //               "100Rs",
    //           "investor_name": 
    //               "Ramu"
    //       }],
    //       "no_of_employees": 6,
    //       "pitch_desc": "This is a pitch",
    //       "links": "www.hello.com"
    // };

    return new Promise(async (resolve) => {
        try {
            const response = await fetch('http://localhost:8000/api/user/register', {
                method: 'POST',
                body: JSON.stringify(userData),
                headers: { 'content-type': 'application/json' }
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Error occurred during request');
            }

            const data = await response.json();
            console.log('Successful registration:', data);
            resolve({ data });
        } catch (error) {
            console.error('Error during registration:', error);
            resolve({ error: error.message });
        }
    });
}


export function checkUser(loginInfo) {
    return new Promise(async (resolve) => {
        const response = await fetch('http://localhost:8000/api/user/login', {
            method: 'POST',
            body: JSON.stringify(loginInfo),
            headers: { 'content-type': 'application/json' }
        });
        const data = await response.json();
        console.log(data);
        // if (data.)
        localStorage.setItem("user", JSON.stringify(data.user));
        localStorage.setItem("token",JSON.stringify(data.token));
        localStorage.setItem("role",JSON.stringify(data.role));
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
                'content-type': 'application/json', 'authorization': `Bearer ${JSON.parse(localStorage.getItem('token'))}`,
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