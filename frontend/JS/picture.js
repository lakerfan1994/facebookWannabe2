document.addEventListener('DOMContentLoaded', () => {
    console.log('dom loaded');
    loadpicture()
})


const loadpicture = async() => {
    const container = document.querySelector('#container');
    container.innerHTML = "";
    let albumId = localStorage.getItem()
    const response = await axios.get(`http://localhost:3000/pictures/${albumId}`);
    for(let i = 0; i < response.data.payload.length; i++){
            let images = response.data.payload[i].picture_usrl
            let img = document.createElement("img");
            img.src = images;
            container.appendChild(img);
    }

       
        
   
}