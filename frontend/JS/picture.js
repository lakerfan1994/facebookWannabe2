document.addEventListener('DOMContentLoaded', () => {
    console.log('dom loaded');
    
})


const loadUsers = async() => {
    const container = document.querySelector('#container');
    container.innerHTML = "";
    const response = await axios.get(`http://localhost:3000/pictures`);
    console.log(response);
    
    response.data.payload.forEach((picture) => {
        let img = document.createElement("img");
        img.src = ;
        container.appendChild(img);
    });
}