document.addEventListener('DOMContentLoaded', () => {
    loadUser();
    let user = document.querySelector('#allUsers');
    user.addEventListener('click', userSelected)
    let logo = document.querySelector('h1');
    logo.addEventListener('click', backToHome);
});

const backToHome = () => {
     window.location.href = "./homepage.html"; 
}

const loadUser = async () => {
    const userList = document.querySelector('#allUsers');
    userList.innerHTML = "";
    const userresponse = await axios.get('http://localhost:3000/users/all');
    console.log(userresponse);
 
    
    userresponse.data.payload.forEach((user) => {
        let userDiv = document.createElement('div');
        userDiv.id = user.firstname
        let userdata = userresponse.data
        
        let images = user.img_url
        let img = document.createElement('img')
        img.src= images
        img.alt = `${user.firstname} ${user.lastname}`;
        console.log(images)
        let name  = document.createElement('p')
        name.innerText = `${user.firstname} ${user.lastname}`;
        userDiv.appendChild(name);
        userDiv.appendChild(img);
        userList.appendChild(userDiv);
    })  
}   
const userSelected = (event) => {
    let x = event.target.innerText;
    if(!(x)){
      x = event.target.alt;
    }
    let array = x.split(" ")
    let user = window.localStorage;
    let firstname = array[0];
    let lastname = array[1];
    user.setItem('firstName', `${firstname}`);
    user.setItem('lastName', `${lastname}`);
    window.location.href = "./singleUser.html";
    let userDiv = document.querySelector('#userDiv');

}