document.addEventListener('DOMContentLoaded', () => {
    loadPosts();
});

const loadPosts = async () => {
    const postsList = document.querySelector('#posts-list');
    postsList.innerHTML = "";
    const postresponse = await axios.get('http://localhost:3000/posts/all');
    const userresponse = await axios.get('http://localhost:3000/users/all');

    // console.log(userresponse.data);
    // console.log(postresponse.data);
    
    postresponse.data.payload.forEach((post) => {
        userresponse.data.payload.forEach((user) => {
            if (user.id === post.poster_id) {
                let listItem = document.createElement('li');
                listItem.innerText = `${user.firstname} ${user.lastname} - ${post.body}`;
                postsList.appendChild(listItem)
            }
        })
    })
}