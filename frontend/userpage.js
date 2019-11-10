document.addEventListener('DOMContentLoaded', () => {
    loadUser();
    let user = document.querySelector('#allUsers');
    user.addEventListener('click', userSelected)
});
const loadUser = async () => {
    const userList = document.querySelector('#allUsers');
    userList.innerHTML = "";
    const userresponse = await axios.get('http://localhost:3000/users/all');
    //console.log(userresponse);
 
    
        userresponse.data.payload.forEach((user) => {
                let userDiv = document.createElement('div');
                userDiv.id = user.firstname
                let userdata = userresponse.data
                
                userDiv.innerText = `${user.firstname} ${user.lastname}`;
                userList.appendChild(userDiv)
                // userSelected(userdata)
            })  
}   
const userSelected = (event) => {
    let x = event.target.innerText;
    console.log(x)
    let userDiv = document.querySelector('#userDiv');
}