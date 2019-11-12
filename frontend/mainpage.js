document.addEventListener('DOMContentLoaded', () => {
    loadPosts();
    populateSelect();
    let submitPost = document.querySelector('#submitPost');
    submitPost.addEventListener('click', addNewPost);
});

const loadPosts = async () => {
    const postsList = document.querySelector('#posts-list');
    postsList.innerHTML = "";
    const postresponse = await axios.get('http://localhost:3000/posts/all');
    const userresponse = await axios.get('http://localhost:3000/users/all');
    console.log(postresponse.data.payload)
    for (let post = postresponse.data.payload.length - 1; post >= 0; post--) {
        let postArr = postresponse.data.payload
        userresponse.data.payload.forEach((user) => {
            if (user.id === postArr[post].poster_id) {
                let postContainer = document.createElement('div');
                postContainer.id = 'post';
                let profilepic = document.createElement('img');
                profilepic.src = user.img_url;
                let userpost = document.createElement('p');
                userpost.innerText = `${user.firstname} ${user.lastname} - ${postArr[post].body}`;
                
                postContainer.appendChild(profilepic);
                postContainer.appendChild(userpost); 
                postsList.append(postContainer);
            }
        })
    };

}

const addNewPost = async (event) => {
    event.preventDefault()
    let list = document.querySelector("#usersList");
    let body = document.querySelector('#text-input').value;
    console.log(body)
    let poster_id = list.options[list.selectedIndex].index
    const response = await axios.post(`http://localhost:3000/posts/register`, {poster_id, body})

    loadPosts()
};

const populateSelect = async () => {
    let list = document.querySelector('#usersList');
    list.size = 0;

    let defaultOption = document.createElement("option");
    defaultOption.text = "Choose User";
    list.add(defaultOption);
    
    const userresponse = await axios.get('http://localhost:3000/users/all');

    userresponse.data.payload.forEach((user) => {
        let option = document.createElement('option')
        option.text = `${user.firstname} ${user.lastname}`
        option.value = user
        list.add(option)
        console.log(option.text)
    })
}

const loadPostComments = async (postId) => {
    const url = 'http://localhost:3000/comments/'
}