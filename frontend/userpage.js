document.addEventListener('DOMContentLoaded', () => {
    loadUser();
    let user = document.querySelector('#allUsers');
    user.addEventListener('click', userSelected)
});
const loadUser = async () => {
    const userList = document.querySelector('#allUsers');
    userList.innerHTML = "";
    const userresponse = await axios.get('http://localhost:3000/users/all');
        userresponse.data.payload.forEach((user) => {
                let userDiv = document.createElement('div');
                userDiv.id = user.firstname
               
                userDiv.innerText = `${user.firstname} ${user.lastname}`;
                userList.appendChild(userDiv)  
            })  
}  
 
const userSelected = (event) => {
    let x = event.target.innerText;
   let array = x.split(" ")
   let user = window.localStorage;
   let firstname = array[0];
   let lastname = array[1];
   user.setItem('firstName', `${firstname}`);
   user.setItem('lastName', `${lastname}`);
   window.location.href = "./singleUser.html";
    let userDiv = document.querySelector('#userDiv');
}