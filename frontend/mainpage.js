document.addEventListener('DOMContentLoaded', () => {
    loadPostComments(1);
    loadPosts();
    populateSelect();
    let submitPost = document.querySelector('#submitPost');
    submitPost.addEventListener('click', addNewPost);
    let mainBoard = document.querySelector('#posts-list');
    mainBoard.addEventListener('click', sendToUniqueUserPage);
});

const loadPosts = async () => {
    const postsList = document.querySelector('#posts-list');
    postsList.innerHTML = "";
    const postresponse = await axios.get('http://localhost:3000/posts/all');
    const userresponse = await axios.get('http://localhost:3000/users/all');
    
    
    for (let post = postresponse.data.payload.length - 1; post >= 0; post--) {
        
        let postArr = postresponse.data.payload
        
        userresponse.data.payload.forEach(async(user) => {
            let comments = await loadPostComments(postArr[post].id);

            if (user.id === postArr[post].poster_id) {
                let postContainer = document.createElement('div');
                postContainer.id = 'post';
                let profilepic = document.createElement('img');
                profilepic.src = user.img_url;

                postContainer.appendChild(profilepic);
                profilepic.alt = `${user.firstname}/${user.lastname}`;

                let userpost = document.createElement('p');
                userpost.innerText = `${user.firstname} ${user.lastname} - ${postArr[post].body}`;
                postContainer.appendChild(userpost);
                comments.response.forEach((comment) => {
                    console.log(comment)
                    let commentsSection = document.createElement('div');
                    commentsSection.class = 'commSect'
                    let singleComment = document.createElement('p');
                    singleComment.id = comment.id
                    singleComment.innerText = comment.body
                    let userpic = document.createElement('img');
                    userpic.src = comment.img_url;
                    userpic.classList.add('user');
                    commentsSection.appendChild(userpic);
                    singleComment.innerText = `${comment.firstname} ${comment.lastname} - ${comment.body}`
                    commentsSection.appendChild(singleComment)
                    postContainer.appendChild(commentsSection)

                })
                postsList.append(postContainer);
            }
        })
    };

}

const loadPostComments = async (postId) => {
    const url = 'http://localhost:3000/comments/'
    let response = await axios.get(url + `${postId}`)
    let obj = {
        response: response.data.payload
    }

    return obj
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


const sendToUniqueUserPage = (event) => {
    let x = event.target.alt;
    let array = x.split("/")
   let user = window.localStorage;
   let firstname = array[0];
   let lastname = array[1];
   user.setItem('firstName', `${firstname}`);
   user.setItem('lastName', `${lastname}`);
   window.location.href = "./singleUser.html";  
}

