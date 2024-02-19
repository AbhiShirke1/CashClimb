export function createPost(postData) {
    console.log(postData)
    return new Promise(async (resolve) => {
        const response = await fetch('http://localhost:8000/api/post/create', {
            method: 'POST',
            body: JSON.stringify(postData),
            headers: { 'content-type': 'application/json', 'authorization': `Bearer ${JSON.parse(localStorage.getItem('token'))}`, }
        });
        const data = await response.json();
        console.log(data);
        resolve({ data });
    }
    );
}
