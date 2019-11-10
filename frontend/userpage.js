document.addEventListener('DOMContentLoaded', () => {
    loadUser();
});

const loadUser = async () => {
    const userList = document.querySelector('#allUsers');
    userList.innerHTML = "";
    const userresponse = await axios.get('http://localhost:3000/users/all');

     console.log(userresponse.data);

    
        userresponse.data.payload.forEach((user) => {
                let listItem = document.createElement('li');
                listItem.innerText = `${user.firstname} ${user.lastname}`;
                userList.appendChild(listItem)
            })
        }
    


