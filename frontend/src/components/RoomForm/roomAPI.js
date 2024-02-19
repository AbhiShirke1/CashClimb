export function createRoom(roomData) {
    console.log(roomData)
    return new Promise(async (resolve) => {
        const response = await fetch('http://localhost:8000/api/room/createRoom', {
            method: 'POST',
            body: JSON.stringify(roomData),
            headers: { 'content-type': 'application/json', 'authorization': `Bearer ${JSON.parse(localStorage.getItem('token'))}`, }
        });
        const data = await response.json();
        console.log(data);
        resolve({ data });
    }
    );
}
