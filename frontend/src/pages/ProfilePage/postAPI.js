export function createPost(postData)
{
    return new Promise(async(resolve)=>{
        const response = await fetch('http://localhost:8080/',{ 
            method:'POST',
            body:JSON.stringify(userData),
            headers:{'content-type':'application/json'}
        });
        const data = await response.json();
        resolve({data});
    }
    );
}